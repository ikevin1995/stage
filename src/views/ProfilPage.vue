<template>
  <div class="profile-page">
    <!-- En-tête de la page -->
    <section class="profile-header">
      <div class="profile-picture">
        <img :src="userData.avatar" alt="Photo de profil" />
      </div>
      <h1>{{ userData.name }}</h1>
      <p>{{ userData.email }}</p>
    </section>

    <!-- Informations utilisateur -->
    <section class="profile-info">
      <h2>Informations personnelles</h2>
      <div class="info-item">
        <strong>Nom complet :</strong>
        <span>{{ userData.name }}</span>
      </div>
      <div class="info-item">
        <strong>Email :</strong>
        <span>{{ userData.email }}</span>
      </div>
      <div class="info-item">
        <strong>Téléphone :</strong>
        <span>{{ userData.phone }}</span>
      </div>
      <div class="info-item">
        <strong>Adresse :</strong>
        <span>{{ userData.address }}</span>
      </div>
    </section>

    <!-- Actions -->
    <section class="profile-actions">
      <button class="btn-edit" @click="editProfile">Modifier le profil</button>
      <button class="btn-logout" @click="logout">Se déconnecter</button>
    </section>
  </div>
</template>
<script>export default {
  name: "UserProfile",
  data() {
    return {
      userData: {
        avatar: require('@/assets/etudiant.jpg'), // Chemin vers l'image
        name: "Jean Dupont",
        email: "jean.dupont@example.com",
        phone: "+33 6 12 34 56 78",
        address: "123 Rue de Paris, France",
      },
    };
  },
  methods: {
    editProfile() {
      this.$router.push({ name: "UserProfile" });
    },
    logout() {
      alert("Vous êtes déconnecté !");
      this.$router.push("/Login");
    },
  },
};

</script>

<style scoped>
/* Conteneur global */
.profile-page {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* En-tête du profil */
.profile-header {
  text-align: center;
  margin-bottom: 30px;
}

.profile-header .profile-picture {
  width: 120px;
  height: 120px;
  margin: 0 auto 15px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #003f5c;
}

.profile-header .profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-header h1 {
  font-size: 24px;
  color: #003f5c;
  margin: 10px 0;
}

.profile-header p {
  font-size: 14px;
  color: #555;
}

/* Informations utilisateur */
.profile-info {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.profile-info h2 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #003f5c;
}

.profile-info .info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.profile-info .info-item strong {
  color: #003f5c;
}

/* Actions */
.profile-actions {
  text-align: center;
}

.profile-actions .btn-edit,
.profile-actions .btn-logout {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 5px;
}

.profile-actions .btn-edit {
  background-color: #003f5c;
  color: white;
  border: none;
}

.profile-actions .btn-edit:hover {
  background-color: #ffa600;
}

.profile-actions .btn-logout {
  background-color: #e63946;
  color: white;
  border: none;
}

.profile-actions .btn-logout:hover {
  background-color: #d62828;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-page {
    padding: 15px;
  }

  .profile-info h2 {
    font-size: 16px;
  }

  .profile-actions .btn-edit,
  .profile-actions .btn-logout {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>
