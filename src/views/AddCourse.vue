<template>
  <div class="add-course-page">
    <div class="form-container">
      <h2>Ajouter un Nouveau Cours</h2>
      <form @submit.prevent="handleAddCourse">
        <!-- Titre -->
        <div class="form-group">
          <label for="title">Titre du Cours :</label>
          <input
            type="text"
            id="title"
            v-model="course.title"
            placeholder="Entrez le titre du cours"
            required
          />
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description">Description :</label>
          <textarea
            id="description"
            v-model="course.description"
            placeholder="Entrez une description"
            rows="3"
            required
          ></textarea>
        </div>

        <!-- Catégorie -->
        <div class="form-group">
          <label for="category">Catégorie :</label>
          <select id="category" v-model="course.category" required>
            <option disabled value="">Sélectionnez une catégorie</option>
            <option value="Informatique">Informatique</option>
            <option value="Langues">Langues</option>
            <option value="Mathématiques">Mathématiques</option>
            <option value="Sciences">Sciences</option>
          </select>
        </div>

        <!-- Prix -->
        <div class="form-group">
          <label for="price">Prix (€) :</label>
          <input
            type="number"
            id="price"
            v-model="course.price"
            placeholder="Entrez le prix du cours"
            min="0"
            required
          />
        </div>

        <!-- Contenu du Cours (éditeur riche) -->
        <div class="form-group">
          <label for="content">Contenu du Cours :</label>
          <div id="editor" ref="editor"></div>
        </div>

        <!-- Bouton de soumission -->
        <button type="submit" class="btn" @click="redirectToCourses">Ajouter le Cours</button>
      </form>
    </div>
  </div>
  <!--sidebar-->
  <sidebar/>
  <router-view/>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Quill from "quill"; // Importation de Quill.js
import "quill/dist/quill.snow.css"; // Style de l'éditeur Quill

export default {
  name: "AddCourse",
  components:{Sidebar},
  data() {
    return {
      course: {
        title: "",
        description: "",
        category: "",
        price: 0,
        content: "", // Contenu du cours formaté
      },
      files: [], // Liste des fichiers joints
    };
  },
  mounted() {
    // Initialisation de l'éditeur Quill
    this.editor = new Quill(this.$refs.editor, {
      theme: "snow",
      placeholder: "Rédigez le contenu du cours ici...",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3,4, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [{ align: [] }],
          ["clean"],
        ],
      },
    });
  },
  methods: {
    handleAddCourse() {
      // Récupération du contenu formaté de l'éditeur Quill
      this.course.content = this.editor.root.innerHTML;

      const newCourse = {
        ...this.course,
        files: this.files, // Ajout des fichiers joints
      };

      console.log("Nouveau cours ajouté :", newCourse);
      alert(`Cours "${this.course.title}" ajouté avec succès !`);

      // Réinitialisation
      this.course = { title: "", description: "", category: "", price: 0, content: "" };
      this.editor.setText(""); // Réinitialisation de l'éditeur
      this.files = [];
    },
    handleFileUpload(event) {
      this.files = Array.from(event.target.files); // Récupère les fichiers joints
    },
    redirectToCourses(){
      this.$router.push({name:'Courses'})
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.add-course-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

/* Formulaire */
.form-container {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 90%;
}

/* Titre */
h2 {
  text-align: center;
  color: #343a40;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
}

/* Groupes de formulaire */
.form-group {
  margin-bottom: 20px;
}

/* Labels */
label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #495057;
}

/* Champs d'entrée */
input,
textarea,
select {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  background-color: #ffffff;
}

/* Conteneur de l'éditeur Quill */
#editor {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  height: 150px;
  overflow-y: auto;
  background-color: #ffffff;
}

/* Effets au focus */
input:focus,
textarea:focus,
select:focus,
#editor:focus {
  border-color: #4caf50;
  outline: none;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

/* Bouton */
.btn {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 480px) {
  .form-container {
    padding: 15px;
  }

  h2 {
    font-size: 20px;
  }

  .btn {
    font-size: 14px;
  }
}
</style>
