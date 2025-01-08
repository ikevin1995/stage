<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <i class="fas fa-graduation-cap"></i> Plateforme des cours
    </div>

    <!-- Hamburger Menu -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Navigation Links -->
    <ul :class="{ 'nav-links': true, 'active': isMenuOpen }">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/courses">Cours</router-link></li>
      <li><router-link to="/login">Connexion</router-link></li>
      <li><router-link to="/Call">Contact</router-link></li>
    </ul>

    <!-- Toggle Theme Button -->
    <button class="theme-toggle" @click="toggleTheme">
      <i class="fas" :class="isDarkMode ? 'fa-sun' : 'fa-moon'"></i>
    </button>
  </nav>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false, // État du menu hamburger
      isDarkMode: false, // État du thème sombre
    };
  },
  mounted() {
    // Vérifier si un thème est déjà enregistré
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.isDarkMode = true;
      document.body.classList.add("dark-mode");
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
      localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
    },
  },
};
</script>
<style>
/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: linear-gradient(90deg, #065c8f, #00c6ff);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Logo */
.logo {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo i {
  margin-right: 10px;
  color: #ffa600;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 4px 0;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.hamburger:hover span {
  background: #ffa600;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 10px;
  transition: all 0.3s ease;
}

.nav-links li a:hover {
  color: #ffa600;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  transform: scale(1.1);
}

/* Responsive Navbar */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    background: #065c8f;
    flex-direction: column;
    width: 200px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px 0 0 10px;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .nav-links li {
    margin: 10px 0;
    text-align: center;
  }
}

/* Theme Toggle Button */
.theme-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.2);
  color: #ffa600;
}

/* Dark Mode */
body.dark-mode {
  background: #121212;
  color: white;
}

body.dark-mode .navbar {
  background: #333;
  color: #ddd;
}

body.dark-mode .nav-links li a {
  color: #ddd;
}

</style>