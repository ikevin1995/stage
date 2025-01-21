<template>
    <div class="description-cours-container">
      <!-- Titre du cours -->
      <div class="description-header">
        <h1>{{ courseTitle }}</h1>
      </div>
  
      <!-- Détails du cours -->
      <div class="description-body">
        <p class="description-text">{{ courseDescription }}</p>
        <p class="description-time"><strong>Durée de Cours :</strong> {{ courseTemps }}</p>
      </div>
  
      <!-- Bouton d'action -->
      <div class="description-footer">
        <button class="cta-btn" @click="redirectToLogin">Commencez maintenant</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      courseTitle() {
        return this.$route.query.title || "Titre non disponible";
      },
      courseDescription() {
        return this.$route.query.description || "Description non disponible";
      },
      courseTemps() {
        return this.$route.query.temps || "Temps non disponible";
      },
    },
    methods: {
      redirectToLogin() {
        this.$router.push({ name: "Login" }); // Nom de la route correspondant à `login.vue`
      },
    },
  };
  </script>
  
  <style>
  /* Conteneur principal */
  .description-cours-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  /* En-tête */
  .description-header h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  /* Corps */
  .description-body {
    margin-bottom: 2rem;
  }
  
  .description-text {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .description-time {
    font-size: 1.1rem;
    color: #666;
  }
  
  /* Pied de page */
  .description-footer .cta-btn {
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
  }
  
  .description-footer .cta-btn:hover {
    transform: scale(1.1);
    background-color: #0056b3;
  }
  
  /* Responsivité */
  @media (max-width: 768px) {
    .description-header h1 {
      font-size: 2rem;
    }
  
    .description-text {
      font-size: 1rem;
    }
  
    .cta-btn {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  }
  </style>
  