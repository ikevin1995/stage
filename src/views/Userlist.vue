<template>
  <div class="user-list-container">
    <h2>Liste des Utilisateurs</h2>
    <button class="btn ad-btn" @click="redirectToaddUser">Ajouter</button>
    <div class="table-wrapper">
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span :class="user.role === 'Admin' ? 'admin-role' : 'user-role'">
                {{ user.role }}
              </span>
            </td>
            <td>
              <button class="edit-btn" @click="editUser(user.id)">
                <i class="fas fa-edit"></i> Modifier
              </button>
              <button class="delete-btn" @click="deleteUser(user.id)">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--sidebar-->
  <Sidebar />
  <router-view />
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "UserList",
  components: { Sidebar },
  data() {
    return {
      users: [
        { id: 1, name: "Jean Dupont", email: "jean@example.com", role: "Admin" },
        { id: 2, name: "Marie Curie", email: "marie@example.com", role: "Utilisateur" },
        { id: 3, name: "Paul Martin", email: "paul@example.com", role: "Utilisateur" },
        { id: 4, name: "Alice Lefevre", email: "alice@example.com", role: "Admin" },
      ],
    };
  },
  methods: {
    editUser(id) {
      this.$router.push({ name: "EditUser", params: { id } });
    },
    deleteUser(id) {
      alert(`Supprimer l'utilisateur avec l'ID ${id}`);
    },
    redirectToaddUser() {
      this.$router.push("/addUser");
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.user-list-container {
  padding: 10px;
  margin: auto;
  max-width: 60%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* En-tête */
h2 {
  color: #003f5c;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

/* Style du bouton Ajouter */
.ad-btn {
  display: block;
  margin: 10px auto 20px;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #049de4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60%;
  transition: background-color 0.3s ease;
}

.ad-btn:hover {
  background-color: #2fd386;
}

/* Conteneur du tableau */
.table-wrapper {
  overflow-x: auto;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-table th,
.user-table td {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  color: #333;
}

.user-table th {
  background-color: #003f5c;
  color: #fff;
  font-weight: bold;
}

.user-table td {
  border-bottom: 1px solid #ddd;
}

.user-table tr:hover {
  background-color: #f0f0f0;
}

/* Rôles */
.admin-role {
  color: #ff9800;
  font-weight: bold;
}

.user-role {
  color: #4caf50;
  font-weight: bold;
}

/* Boutons d'action */
button {
  padding: 8px 12px;
  border: none;
  background-color: #003f5c;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff9800;
}

.edit-btn {
  background-color: #2196f3;
}

.delete-btn {
  background-color: #f44336;
}

.edit-btn:hover {
  background-color: #1976d2;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

/* Media queries */
@media (max-width: 768px) {
  .user-list-container {
    padding: 15px;
  }

  .ad-btn {
    font-size: 14px;
    padding: 8px 15px;
  }

  .user-table th,
  .user-table td {
    font-size: 12px;
  }

  button {
    font-size: 10px;
    padding: 6px 10px;
  }
}
</style>
