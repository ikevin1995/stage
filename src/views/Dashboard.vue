<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <nav class="sidebar" :class="{'active': isMenuOpen}"> |
      |
      <h2><i class="fas fa-chalkboard"></i> Tableau de bord</h2>
      <div class="search-bar">
        <input type="text" placeholder="Rechercher..." v-model="searchQuery" />
      </div>

      <ul>
        <li>
          <router-link to="/add-course">
            <i class="fas fa-book-open"></i> Ajouter Cours
          </router-link>
        </li>
        <li>
          <router-link to="/add-teacher">
            <i class="fas fa-user-tie"></i> Ajouter Professeur
          </router-link>
        </li>
        <li>
          <router-link to="/teacher">
            <i class="fas fa-users"></i> Liste des Professeurs
          </router-link>
        </li>
        <li>
          <router-link to="/students">
            <i class="fas fa-user-graduate"></i> Liste des Étudiants
          </router-link>
        </li>
        <li>
          <router-link to="/payment">
            <i class="fas fa-money-check-alt"></i> Paiement
          </router-link>
        </li>
        <li>
          <router-link to="/user">
            <i class="fas fa-user"></i> Liste des Utilisateur
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Hamburger Menu -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Main Content -->
    <main class="dashboard-content">
      <div class="welcome-section">
        <h1><i class="fas fa-tachometer-alt"></i> Bienvenue sur le tableau de bord</h1>
        <p>Gérez vos cours, enseignants, étudiants et paiements en toute simplicité.</p>
      </div>

      <!-- Statistics Section -->
      <section class="statistics">
        <div class="stat-box">
          <i class="fas fa-book stat-icon"></i>
          <h3>45</h3>
          <p>Cours disponibles</p>
        </div>
        <div class="stat-box">
          <i class="fas fa-user-tie stat-icon"></i>
          <h3>12</h3>
          <p>Professeurs</p>
        </div>
        <div class="stat-box">
          <i class="fas fa-user-graduate stat-icon"></i>
          <h3>150</h3>
          <p>Étudiants inscrits</p>
        </div>
        <div class="stat-box">
          <i class="fas fa-money-check-alt stat-icon"></i>
          <h3>25</h3>
          <p>Paiements récents</p>
        </div>
      </section>

      <!-- Router View for Page Content -->
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      isMobile: false,  // Nouvelle donnée pour suivre l'état de la taille de l'écran
      isMenuOpen: false, // Etat du menu hamburger
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkMobile);
    this.checkMobile(); // Vérifier la taille de l'écran au chargement initial
  },
  unmounted() {
    window.removeEventListener("resize", this.checkMobile); // Nettoyage de l'événement lors de la destruction du composant
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768; // Vérifie si l'écran est plus petit que 768px
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Basculer le menu hamburger
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Arial', sans-serif;
  position: relative;
  transition: margin-left 0.3s ease;
}

/* Barre latérale */
.sidebar {
  width: 250px;
  background-color: #003f5c;
  color: white;
  padding: 20px;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
}

.sidebar h2 {
  font-size: 24px;
  color: white;
  margin-bottom: 30px;
}

.sidebar i {
  margin-right: 10px;
  font-size: 22px; /* Augmentation de la taille des icônes */
  color: white; /* Icônes blanches */
}

/* Enlever les puces de la liste */
.sidebar ul {
  list-style: none; /* Supprimer les puces */
  padding-left: 0;
}

.sidebar li {
  margin-bottom: 15px;
}

.sidebar a {
  text-decoration: none;
  color: white; /* Lien en blanc */
  display: flex;
  align-items: center;
  font-size: 16px; /* Taille du texte ajustée */
  transition: color 0.3s ease;
}

.sidebar a:hover {
  color: #ffa600; /* Changer la couleur du texte au survol */
}

/* Menu hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 20px;
  z-index: 20;
}

.hamburger span {
  background: white;
  height: 3px;
  width: 25px;
  margin: 4px 0;
  border-radius: 5px;
  transition: background 0.3s ease;
}

/* Affichage de la sidebar quand elle est active */
.sidebar.active {
  transform: translateX(0);
}

/* Contenu principal */
.dashboard-content {
  flex: 1;
  margin-left: 250px;
  padding: 30px;
  overflow-y: auto;
  transition: margin-left 0.3s ease;
}

.welcome-section h1 {
  font-size: 28px;
  color: #003f5c;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.welcome-section h1 i {
  margin-right: 10px;
}

.welcome-section p {
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
}

/* Section des statistiques */
.statistics {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-box {
  flex: 1;
  min-width: 200px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}

.stat-box .stat-icon {
  font-size: 48px; /* Augmenter la taille des icônes */
  color: #ffa600;
  margin-bottom: 10px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.stat-box .stat-icon:hover {
  transform: scale(1.1);
  color: #003f5c;
}

.stat-box h3 {
  font-size: 32px;
  color: #003f5c;
  margin-bottom: 10px;
}

.stat-box p {
  font-size: 16px;
  color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
  /* Hamburger visible sur mobile */
  .hamburger {
    display: flex;
  }

  .sidebar {
    position: fixed;
    width: 250px;
    left: -250px; /* Cacher par défaut */
    transition: transform 0.3s ease-in-out;
  }

  /* Rendre visible la sidebar quand elle est active */
  .sidebar.active {
    left: 0;
  }

  /* Réajustement du contenu principal */
  .dashboard-content {
    margin-left: 0;
    padding: 20px;
  }

  .statistics {
    flex-direction: column;
  }
}

.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
}
</style>
