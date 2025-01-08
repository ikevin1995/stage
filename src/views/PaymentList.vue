<template>
    <div class="user-list-container">
      <h2>Liste des Paiments</h2>
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th> <i class="fas fa-user"></i>Nom</th>
            <th>Email</th>
            <th> <i class="fas fa-money-check-alt"></i>Payement recent</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pay in pay" :key="pay.id">
            <td>{{ pay.id }}</td>
            <td>{{ pay.name }}</td>
            <td>{{ pay.email }}</td>
            <td>{{ pay.fees }}</td>
            <td>{{ pay.Date }}</td><td>
  <button class="details-btn" @click="details(pay.id)">
    <i class="fas fa-info-circle"></i> Détails
  </button>
</td>

          </tr>
        </tbody>
      </table>
    </div>
    <!--sidebar-->
    <Sidebar/>
    <router-view/>
  </template>
  
  <script>
  import Sidebar from "@/components/Sidebar.vue";
  
  export default {
    name: "PaymentList",
    components: { Sidebar },
    data() {
      return {
        pay: [
          { id: 1, name: "Jean Dupont", email: "jean@example.com", fees: "200$", Date: "25/10/2024" },
          { id: 2, name: "Marie Curie", email: "marie@example.com", fees: "250$", Date: "25/10/2024" },
          { id: 3, name: "Paul Martin", email: "paul@example.com", fees: "200$", Date: "25/10/2024" },
          { id: 4, name: "Alice Lefevre", email: "alice@example.com", fees: "200$", Date: "25/10/2024" },
        ],
      };
    },
    methods: {
      details(id) {
        console.log(`Afficher les détails pour le paiement avec l'ID ${id}`);
        // Vous pouvez utiliser `this.$router.push` si vous avez une route pour afficher les détails
        this.$router.push({ name: "Paylist", params: { id } });
      },
    },
  };
  </script>
   
  <style scoped>
  /* Conteneur principal */
  .user-list-container {
    padding: 5px;
    margin-left: 40vh;
    background-color:withe;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 50%;
  }
  
  h2 {
    color:#003f5c;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    margin-left: auto;
  }
  
  /* Style du tableau */
  .user-table {
    width:800px;
    border-collapse: collapse;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 8px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .user-table th,
  .user-table td {
    padding: 12px;
    text-align: left;
    font-size: 16px;
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
  
  /* Style des rôles */
  .admin-role {
    color: #ff9800;
    font-weight: bold;
  }
  
  .user-role {
    color: #4caf50;
    font-weight: bold;
  }
  
  /* Style des boutons d'action */
  /* Style du bouton "Détails" */
.details-btn {
  padding: 10px 20px;
  border: none;
  background: linear-gradient(90deg, #ffa600, #ff7f50);
  color: #fff;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.details-btn:hover {
  background: linear-gradient(90deg, #ff7f50, #ffa600);
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.details-btn i {
  font-size: 16px;
}
</style>
  