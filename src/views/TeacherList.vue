<template>
    <!-- Main Content -->
    <main class="dashboard-content">
      <div class="welcome-section">
    <div class="teacher-list-page">
      <h1>Liste des Professeurs</h1>
      <button class="btn ad-btn" @click="redirectToaddTeacher">Ajouter</button>
      <table class="teacher-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(teacher, index) in teachers" :key="index">
            <td>
              <img :src="teacher.photo" alt="Photo de {{ teacher.name }}" class="teacher-photo" />
            </td>
            <td>{{ teacher.name }}</td>
            <td>{{ teacher.email }}</td><td>
  <div class="button-group">
    <button class="btn edit-btn" @click="editTeacher(teacher)">
      <i class="fas fa-edit"></i> Modifier
    </button>
    <button class="btn delete-btn" @click="deleteTeacher(index)">
      <i class="fas fa-trash"></i> Supprimer
    </button>
    <button class="btn details-btn" @click="detailsTeacher">
      <i class="fas fa-info-circle"></i> Détails
    </button>
  </div>
</td>

          </tr>
        </tbody>
      </table>
    </div>
        </div>


    </main>
    <!--sidebar-->
    <Sidebar/>
    <router-view/>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  export default {
    name: "TeacherList",
    components:{Sidebar},
    data() {
      return {
        teachers: [
          {
            name: "Alice Dupont",
            email: "alice@example.com",
            photo: "https://via.placeholder.com/50",
          },
          {
            name: "Jean Martin",
            email: "jean@example.com",
            photo: "https://via.placeholder.com/50",
          },
          {
            name: "Marie Curie",
            email: "marie@example.com",
            photo: "https://via.placeholder.com/50",
          },
        ],
      };
    },
    methods: {
    
      editTeacher(teacher) {
        alert(`Modifier le professeur : ${teacher.name}`);
        // Logique de modification à ajouter ici
      },
      deleteTeacher(index) {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce professeur ?")) {
          this.teachers.splice(index, 1);
          alert("Professeur supprimé avec succès !");
        }
      },
      
    redirectToaddTeacher() {
      // Redirection vers la page d'inscription
      this.$router.push('/add-teacher');
    },
    },
  };
  </script>
  
  <style scoped>
  /* Page principale */
  .teacher-list-page {
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
    margin: auto;
    margin-left: auto;
  }
  
  /* Table */
  .teacher-table {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* En-tête du tableau */
  .teacher-table th {
    background-color: #4caf50;
    color: white;
    padding: 12px;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid #ddd;
  }
  
  /* Lignes du tableau */
  .teacher-table td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
  
  /* Photo du professeur */
  .teacher-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ddd;
  }
  
  /* Ligne de tableau - hover */
  .teacher-table tr:hover {
    background-color: #f1f1f1;
  }
  
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

  .ad-btn {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-left: 26.5%;
    width:80px;
    background-color: indianred;
  }
  
  .ad-btn:hover {
    background-color: #2fd386;
  }
  </style>
  