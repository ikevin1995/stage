<template>
    <div class="Add-user-page">
        <div class="form-container">
            <h2>Ajouter un utilisateur</h2>
            <form action="">
                <div class="form-group">
                    <label for="name">nom et Prénom</label>
                    <input type="text" id="name" v-model="user.name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="user.email" placeholder="taper Email valide">
                </div>
                <div class="form-group">
                    <label for="">Mot de Passe</label>
                    <input type="password" placeholder="Taoer le mot de passe">
                </div>
                <div class="form-group">
                    <label for="">Confirmer Votre mot Passe</label>
                    <input type="password" placeholder="Retaper votre mot de passe">
                </div>
                <button type="submit" class="save-btn">Valide</button>
            </form>
        </div>
    </div>
    
  <Sidebar/>

<router-view/>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
export default{
    components:{Sidebar},
    data(){
      return{
        user:{

        name: '',
        email: '',
        password: '',
        confirmPassword: ''
        }
      }
    }
}
</script>
<style scoped>
.Add-user-page{
  margin: 95px auto;
  padding: 50px;
  max-width: 600px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
  
.form-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}
h2{
    color: #003f5c;
    
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input {
  width: 89%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.save-btn {
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