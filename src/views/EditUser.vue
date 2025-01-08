<template>
  <div class="edit-user-container">
    <h2>Modifier l'utilisateur</h2>
    <form @submit.prevent="updateUser">
      <div class="form-group">
        <label for="name">Nom</label>
        <input v-model="user.name" type="text" id="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="user.email" type="email" id="email" />
      </div>
      <div class="form-group">
        <label for="role">Rôle</label>
        <select v-model="user.role" id="role">
          <option value="Admin">Admin</option>
          <option value="Utilisateur">Utilisateur</option>
        </select>
      </div>
      <button type="submit" class="save-btn">Enregistrer</button>
    </form>
  </div>
  <Sidebar/>
  <router-view/>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: "EditUser",
  props: ["id"], // Récupérer l'ID depuis la route
  components:{Sidebar,},
  data() {
    return {
      user: {
        id: this.id,
        name: "",
        email: "",
        role: "",
      },
    };
  },
  created() {
    // Vérifier l'ID de l'utilisateur
    if (this.id) {
      // Exemple d'appel API simulé pour récupérer l'utilisateur
      this.user = {
        id: this.id,
        name: "Utilisateur Exemple",
        email: "example@example.com",
        role: "Utilisateur",
      };
    } else {
      console.error("ID utilisateur non trouvé !");
    }
  },
  methods: {
    updateUser() {
      // Logic pour mettre à jour l'utilisateur
      alert(`Utilisateur mis à jour : ${JSON.stringify(this.user)}`);

      // Redirection vers la liste des utilisateurs
      this.redirectToUserlist();
    },
    redirectToUserlist() {
      this.$router.push('/user');
    },
  },
};
</script>

<style scoped>
.edit-user-container {
  margin: 85px auto;
  padding: 20px;
  max-width: 600px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #003f5c;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input,
select {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #003f5c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #ff9800;
}
</style>
