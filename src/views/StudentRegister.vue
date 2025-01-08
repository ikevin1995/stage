<template>
  <div class="register-page">
    <div class="register-container">
      <h2>Inscription Étudiant</h2>
      <form @submit.prevent="handleRegister">
        <!-- Champ Nom Complet -->
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Entrez votre nom complet"
            required
          />
        </div>

        <!-- Champ Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Entrez votre email"
            required
          />
        </div>

        <!-- Champ Mot de Passe -->
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <!-- Champ Confirmer le Mot de Passe -->
        <div class="form-group">
          <label for="confirmPassword">Confirmez le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            required
          />
        </div>

        <!-- Champ Age -->
        <div class="form-group">
          <label for="age">Date de Naissance</label>
          <input
            type="date"
            id="age"
            v-model="age"
            placeholder="Entrez votre âge"
            required
            min="18"
            max="100"
          />
        </div>

        <!-- Champ Adresse -->
        <div class="form-group">
          <label for="address">Adresse</label>
          <input
            type="text"
            id="address"
            v-model="address"
            placeholder="Entrez votre adresse"
            required
          />
        </div>

        <!-- Champ Photo de Profil -->
        <div class="form-group">
          <label for="photo">Photo de Profil</label>
          <input
            type="file"
            id="photo"
            @change="handleFileUpload"
            accept="image/*"
          />
        </div>

        <button type="submit" class="btn">S'inscrire</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentRegister",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      address: "",
      photo: null, // Pour stocker la photo téléchargée
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }

      alert(`Inscription réussie pour : ${this.name} (${this.email})`);
      console.log("Détails de l'inscription", {
        name: this.name,
        email: this.email,
        age: this.age,
        address: this.address,
        photo: this.photo,
      });

      // Vous pouvez intégrer ici une API pour enregistrer les informations de l'étudiant
    },
    handleFileUpload(event) {
      // Gérer le téléchargement de la photo
      const file = event.target.files[0];
      if (file) {
        this.photo = file;
      }
    },
  },
};
</script>

<style scoped>
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
