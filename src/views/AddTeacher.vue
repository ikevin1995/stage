<template>
  <div class="add-teacher-container">
    <h1>Ajouter un Professeur</h1>
    <form @submit.prevent="handleSubmit">
      <!-- Nom -->
      <div class="form-group">
        <label for="name">Nom :</label>
        <input
          type="text"
          id="name"
          v-model="teacher.name"
          placeholder="Entrez le nom du professeur"
          required
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email :</label>
        <input
          type="email"
          id="email"
          v-model="teacher.email"
          placeholder="Entrez l'adresse email"
          required
        />
      </div>

      <!-- CV -->
      <div class="form-group">
        <label for="cv">CV :</label>
        <input type="file" id="cv" accept=".pdf,.doc,.docx" required />
      </div>

      <!-- Photo -->
      <div class="form-group">
        <label for="photo">Photo :</label>
        <input type="file" id="photo" accept="image/*" required />
      </div>

      <!-- Carte d'identité -->
      <div class="form-group">
        <label for="identity">Carte d'identité :</label>
        <input type="file" id="identity" accept="image/*,.pdf" required />
      </div>

      <!-- Bouton de soumission -->
      <button type="submit" class="submit-btn">Ajouter le professeur</button>
    </form>
  </div>
  <!--sidebar-->
  <Sidebar/>

<router-view/>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue';
export default {
  name: "AddTeacher",
  components:{Sidebar},
  data() {
    return {
      teacher: {
        name: "",
        email: "",
        specialty: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Simuler un appel API (vous pouvez remplacer par un vrai appel API)
      console.log("Données du professeur :", this.teacher);
      alert("Le professeur a été ajouté avec succès !");
      this.teacher = { name: "", email: "", specialty: "" };
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.add-teacher-container {
  max-width: 450px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

/* Animation d'apparition */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Titre */
h1 {
  font-size: 24px;
  color: #4caf50;
  text-align: center;
  margin-bottom: 20px;
}

/* Groupes de formulaire */
.form-group {
  margin-bottom: 20px;
}

/* Labels */
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

/* Champs d'entrée */
input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Effets au focus */
input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
  outline: none;
}

/* Bouton de soumission */
.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #45a049;
}

/* Responsive */
@media (max-width: 480px) {
  .add-teacher-container {
    padding: 15px;
  }

  h1 {
    font-size: 20px;
  }

  .submit-btn {
    font-size: 14px;
  }
}
</style>

  