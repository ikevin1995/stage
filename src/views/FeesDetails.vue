<template>
    <div class="payment-details-container">
      <!-- Titre -->
      <div class="payment-header">
        <h1>Détails du Paiement</h1>
      </div>
  
      <!-- Corps avec les informations du paiement -->
      <div class="payment-body">
        <p><strong>ID du Paiement :</strong> {{ paymentDetails.id }}</p>
        <p><strong>Nom du Cours :</strong> {{ paymentDetails.courseName }}</p>
        <p><strong>Montant :</strong> {{ paymentDetails.amount }} €</p>
        <p><strong>Date du Paiement :</strong> {{ paymentDetails.date }}</p>
        <p><strong>Méthode de Paiement :</strong> {{ paymentDetails.method }}</p>
      </div>
  
      <!-- Bouton de retour -->
      <div class="payment-footer">
        <button class="back-btn" @click="goBack">Retour à Mes Cours</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PaymentDetails",
    data() {
      return {
        paymentDetails: {
          id: "123456",
          courseName: "Introduction à Vue.js",
          amount: 49.99,
          date: "2025-01-09",
          method: "Carte de Crédit",
        },
      };
    },
    methods: {
      goBack() {
        this.$router.push("/mycourses");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Conteneur principal */
  .payment-details-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  /* En-tête */
  .payment-header h1 {
    font-size: 2.4rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  /* Corps */
  .payment-body p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .payment-body strong {
    color: #007bff;
  }
  
  /* Bouton de retour */
  .payment-footer .back-btn {
    padding: 12px 24px;
    background-color: #28a745;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .payment-footer .back-btn:hover {
    background-color: #218838;
    transform: scale(1.05);
  }
  
  /* Responsivité */
  @media (max-width: 768px) {
    .payment-header h1 {
      font-size: 2rem;
    }
  
    .payment-body p {
      font-size: 1rem;
    }
  
    .payment-footer .back-btn {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  }
  </style>
  