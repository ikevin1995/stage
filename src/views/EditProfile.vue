<template>
  <div class="edit-profile-page">
    <h1>Modifier votre profil</h1>
    <form @submit.prevent="saveProfile">
      <div class="form-group">
        <label for="avatar">Changer l'Image</label>
        <input type="file" id="avatar" @change="updateAvatar" />
      </div>
      <div class="form-group">
        <label for="name">Nom complet</label>
        <input type="text" id="name" v-model="user.name" placeholder="Nom complet" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" placeholder="Adresse email" required />
      </div>
      <button type="submit">Sauvegarder</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      user: {
        name: "Jean Dupont", // Exemple initial
        email: "jean.dupont@example.com",
      },
    };
  },
  methods: {
    updateAvatar(event) {
      const file = event.target.files[0];
      console.log("Avatar mis à jour :", file);
    },
    saveProfile() {
      alert("Profil sauvegardé !");
      // Logique pour sauvegarder les données mises à jour
      console.log("Nouvelles données utilisateur :", this.user);
      this.$router.push({ name: "Profil" }); // Redirige vers le profil
    },
  },
};
</script>

<style scoped>
/* Ajoutez votre style ici */
.edit-profile-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 20px;
}
button {
  background-color: #003f5c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #ffa600;
}
</style>
