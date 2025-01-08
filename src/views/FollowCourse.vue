<template>
    <div class="form-container">
      <h2>Suivre le Cours</h2>
      <p>Vous suivez le cours : {{ selectedCourse.name }}</p>
      <p>Description : {{ selectedCourse.description }}</p>
      <button @click="redirectToPayment" class="follow-btn">Passer au Paiement</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCourse: {},
      };
    },
    created() {
      this.selectedCourse = JSON.parse(localStorage.getItem('selectedCourse'));
    },
    methods: {
      redirectToPayment() {
        this.$router.push('/payment');
      },
    },
  };
  </script>
  
  <style>
  /* CSS similaire à StudentRegister.vue */
  .register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

.register-container {
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

input:focus {
  border-color: #4caf50;
  outline: none;
}

input[type="file"] {
  padding: 5px;
}

.btn {
  width: 100%;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  font-size: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

  </style>
  