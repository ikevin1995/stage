<template>
  <div class="student-list-page"> 
    <h1>Liste des étudiants</h1>
    <table class="student-table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>
            <i class="fas fa-envelope"></i>
            Email</th>
          <th>Classe</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.class }}</td>
          <td>
            <div class="button-group">
              <button class="btn edit-btn" @click="editStudent(student)">
      <i class="fas fa-edit"></i> Modifier
    </button>
    <button class="btn delete-btn" @click="deleteStudent(index)">
      <i class="fas fa-trash"></i> Supprimer </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    
  
    <!--sidebar-->
    <Sidebar/>

    <router-view/>
  </div>
  </template>
<script>
import Sidebar from '@/components/Sidebar.vue';


export default {
  name: "StudentList", // Gardez celui qui correspond à votre composant actuel
  components: { Sidebar },
  data() {
    return {
      students: [
        { name: "Alice Dupont", email: "alice@example.com", class: "Informatique" },
        { name: "Jean Martin", email: "jean@example.com", class: "Mathématiques" },
        { name: "Marie Curie", email: "marie@example.com", class: "Sciences" },
      ],
    };
  },
  methods: {
    editStudent(student) {
      alert(`Modifier : ${student.name}`);
      // Ajouter la logique de modification
    },
    deleteStudent(index) {
      if (confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")) {
        this.students.splice(index, 1);
        alert("Étudiant supprimé avec succès !");
      }
    },
  },
};
</script>

<style scoped>
/* Styles pour la page */
.student-list-page {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  min-height: 100vh;
}

/* Titre */
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Table */
.student-table {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* En-tête du tableau */
.student-table th {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 2px solid #ddd;
}

/* Corps du tableau */
.student-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Ligne de tableau - hover */
.student-table tr:hover {
  background-color: #f1f1f1;
}

/* Boutons */
  /* Boutons */
  .btn {
  padding: 10px 5px; /* Réduction de la taille des boutons */
  border: none;
  border-radius: 4px;
  font-size: 12px; /* Taille de texte réduite */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin: 0 3px; /* Espacement horizontal entre les boutons */
}

.btn:hover {
  transform: scale(1.05); /* Légère mise en évidence au survol */
}

/* Bouton Modifier */
.edit-btn {
  background-color: #007bff; /* Bleu */
}

.edit-btn:hover {
  background-color: #0056b3; /* Bleu foncé */
}

/* Bouton Supprimer */
.delete-btn {
  background-color: #dc3545; /* Rouge */
}

.delete-btn:hover {
  background-color: #bd2130; /* Rouge foncé */
}

/* Bouton Détails */
.details-btn {
  background-color: #17a2b8; /* Bleu clair */
}

.details-btn:hover {
  background-color: #117a8b; /* Bleu plus foncé */
}

/* Alignement des boutons dans la cellule */
.button-group {
  display: flex;
  justify-content: center; /* Aligner les boutons au centre */
  align-items: center; /* Centrer verticalement */
}

</style>
