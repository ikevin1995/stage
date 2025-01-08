<template>
  <div id="app">
    <!-- Navbar -->
    <AppHeader />

    <div class="main-container">
      <!-- Sidebar -->
      <!--<SideBar /-->
      <!-- Contenu principal -->
      <div class="content">
        <router-view /> <!-- Le contenu des routes sera rendu ici -->
      </div>
    </div>
  </div>
</template>

<script>
// Importation des composants Navbar et Sidebar
import AppHeader from './components/AppHeader.vue';
//import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    //SideBar,
    
  },
};
</script>

<style>
/* Style global */
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Structure principale */
.main-container {
  display: flex;
  height: 100vh;
}

/* Contenu principal */
.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
