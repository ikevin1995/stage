<template>
  <div class="payment-page">
    <div class="payment-container">
      <h2>Paiement</h2>
      <form @submit.prevent="processPayment">
        <!-- Champ Numéro de Carte -->
        <div class="form-group">
          <label for="card-number">Numéro de carte</label>
          <input
            type="text"
            id="card-number"
            v-model="payment.cardNumber"
            placeholder="1234 5678 9101 1121"
            required
          />
        </div>

        <!-- Champ Date d'Expiration -->
        <div class="form-group">
          <label for="expiry">Date d'expiration</label>
          <input
            type="date"
            id="expiry"
            v-model="payment.expiry"
            placeholder="MM/AA"
            required
          />
        </div>

        <!-- Champ CVV -->
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            v-model="payment.cvv"
            placeholder="123"
            required
          />
        </div>

        <!-- Bouton de Soumission -->
        <button type="submit" class="submit-btn">Payer</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payment: {
        cardNumber: "",
        expiry: "",
        cvv: "",
      },
    };
  },methods: {
  processPayment() {
    alert("Paiement réussi !");
    this.$router.push('/mycourses'); // Chemin exact correspondant à la route définie dans index.js
  },
},

};
</script>

<style scoped>
/* Page Paiement */
.payment-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
}

/* Conteneur Principal */
.payment-container {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Titre */
h2 {
  margin-bottom: 20px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}

/* Groupe de Formulaire */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

/* Étiquette */
label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: bold;
}

/* Champ de Saisie */
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #1e88e5;
  box-shadow: 0 0 5px rgba(30, 136, 229, 0.5);
  background-color: #ffffff;
  outline: none;
}

/* Bouton */
.submit-btn {
  width: 100%;
  padding: 12px 15px;
  background-color: #1e88e5;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background-color: #1565c0;
  transform: scale(1.02);
}

.submit-btn:active {
  background-color: #0d47a1;
}

/* Responsive */
@media (max-width: 768px) {
  .payment-container {
    padding: 20px;
    max-width: 90%;
  }

  h2 {
    font-size: 20px;
  }

  input {
    font-size: 14px;
  }

  .submit-btn {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
