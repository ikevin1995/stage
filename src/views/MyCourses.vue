<template>
  <main class="dashboard-content">
    
  
    <!-- Header -->
    <div class="page-header">
      <h1>Mes Cours</h1>
      <p class="page-description">Explorez et suivez vos cours préférés!!!</p>
    </div>

  
    <!-- Liste des cours -->
    <div class="list-container">
      <div class="list-item" v-for="(item, index) in items" :key="index">
        <div class="course-icon">
          <i class="fas fa-book-open"></i>
        </div>
        <h3>{{ item.name }}</h3>
        <p class="description">{{ item.description }}</p>
        <button class="follow-btn" @click="followCourse(item)">Suivre</button>
      </div>
    </div>
    
  <Sidebar/>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components:{Sidebar},
  data() {
    return {
      items: [
        { name: 'MAFINA', description: 'Matematique Financiere, ce cours est dedie aux comptables', showDetails: false },
        { name: 'Cours 2', description: 'Description du cours 2', showDetails: false },
        { name: 'Cours 3', description: 'Description du cours 3', showDetails: false },
        { name: 'Cours 4', description: 'Description du cours 4', showDetails: false },
        { name: 'Cours 4', description: 'Description du cours 4', showDetails: false },
        { name: 'Cours 4', description: 'Description du cours 4', showDetails: false },
        { name: 'Cours 4', description: 'Description du cours 4', showDetails: false },
      ],
    };
  },
  methods: {
    followCourse(item) {
      // Vérifier si l'utilisateur est connecté (exemple avec localStorage)
      const isAuthenticated = localStorage.getItem('isAuthenticated');

      if (!isAuthenticated) {
        // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
        this.$router.push('/login');
      } else {
        // Si l'utilisateur est connecté, suivre le cours
        alert(`Vous suivez maintenant le ${item.name}`);
      }
    },
  },
};
</script>
<style scoped>
/* Contenu principal */
.dashboard-content {
  padding: 20px;
  margin-left: auto;
  background-color: #f4f4f9;
}

/* En-tête de la page */
.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2rem;
  color: #003f5c;
  margin-bottom: 10px;
}

.page-header .page-description {
  font-size: 1rem;
  color: #666;
}

/* Conteneur de la liste */
.list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

/* Carte de cours */
.list-item {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.list-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Icône pour les cours */
.course-icon {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.follow-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.follow-btn:hover {
  background-color: #218838;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .dashboard-content {
    margin-left: 0;
    padding: 10px;
  }

  .page-header h1 {
    font-size: 1.8rem;
  }

  .list-container {
    grid-template-columns: 1fr;
  }
}

</style>