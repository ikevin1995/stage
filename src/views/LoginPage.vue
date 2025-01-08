<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Connexion</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email"> 
            <i class="fas fa-user"></i> Email</label>
          <input type="email" id="email" v-model="email" placeholder="Entrez votre email" required />
        </div>
        <div class="form-group">
          <label for="password"> <i class="fas fa-lock"></i> Password</label>
          <input
            type="password"
            id="password" 
            v-model="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit" class="btn" @click="redirectToPayment">Se connecter</button>
        <button type="button" class="btn_primary" @click="redirectToRegister">S'inscrire</button> <!-- Ajout de la redirection -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      alert(`Connexion avec :\nEmail: ${this.email}\nMot de passe: ${this.password}`);
      // Ici, vous pouvez ajouter la logique d'intégration avec une API pour authentifier l'utilisateur
    },
    redirectToRegister() {
      // Redirection vers la page d'inscription
      this.$router.push('/register');
    },
    
    redirectToPayment() {
        this.$router.push('/payment');
      },
  },
};
</script>

<style scoped>
/* Styles de la page Login */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:rgb(235, 252, 250);
}

.login-container {
  background: white;
  padding: 30px;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  width: 50vh;
  font-size: 5vh;
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
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 15px;
}

input:focus {
  border-color: #4caf50;
  outline: none;
}

.btn {
  width: 100%;
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  font-size: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn_primary {
  width: 150px;
  padding: 10px;
  margin: 20px;
  background-color: #3532f1;
  color: rgba(255, 255, 255, 0.856);
  font-size: 25px;
  border: #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #a027c9b7;
}

.btn_primary:hover {
  background-color: burlywood;
}
</style>
