<template>

    <!-- Main Content -->
    <main class="dashboard-content">
      <div class="welcome-section">
        
  <div class="list-container">
    
    <div class="list-item" v-for="(item, index) in items" :key="index">
      <h3>{{ item.name }}</h3>
      <p class="description">{{ item.description }}</p>
      <button class="follow-btn" @click="followCourse(item)">Suivre</button>
    </div>
  </div>
      </div>
    </main>
    
    <!--Sidebar-->
    <Sidebar/>
      <!-- Router View for Page Content -->
      <router-view />
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

<style>
.list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Grille avec des colonnes adaptatives */
  gap: 20px;
  padding: 20px;
  margin-left: 35vh;
}

.list-item {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.list-item:hover {
  background-color: #f9f9f9;
  transform: translateY(-5px);
}

h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
}

.details-btn,
.follow-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.details-btn:hover {
  background-color: #0056b3;
}

.follow-btn {
  background-color: #28a745;
}

.follow-btn:hover {
  background-color: #218838;
}
</style>
