<template>
    <div class="contact-page">
      <!-- En-tête de contact -->
      <section class="contact-header">
        <h1>Contactez-nous</h1>
        <p>Nous sommes là pour répondre à toutes vos questions. Envoyez-nous un message ou contactez-nous directement !</p>
      </section>
  
      <!-- Formulaire de contact -->
      <section class="contact-form-section">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nom complet</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Votre nom" required />
          </div>
  
          <div class="form-group">
            <label for="email">Adresse email</label>
            <input type="email" id="email" v-model="formData.email" placeholder="Votre email" required />
          </div>
  
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" placeholder="Votre message" rows="5" required></textarea>
          </div>
  
          <button type="submit" class="btn-submit">Envoyer</button>
        </form>
      </section>
  
      <!-- Informations supplémentaires -->
      <section class="contact-info-section">
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <p>(+257) 68 50 40 20</p>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>boulevard de l'UPRONA Bussines House 2eme etage</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>irambonakevinho78@gmail.com</p>
        </div>
      </section>
  
      <!-- Réseaux sociaux -->
      <section class="social-media-section">
        <h3>Suivez-nous :</h3>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </section>
    </div>
  </template>
<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Formulaire soumis :", this.formData);
      this.formData = { name: "", email: "", message: "" };
      alert("Merci de nous avoir contactés !");
    },
  },
};
</script>
<style scoped>
/* Conteneur global */
.contact-page {
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* En-tête */
.contact-header {
  text-align: center;
  margin-bottom: 30px;
}

.contact-header h1 {
  font-size: 32px;
  color: #003f5c;
}

.contact-header p {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

/* Formulaire */
.contact-form-section {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #003f5c;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #ffa600;
  outline: none;
}

.contact-form .btn-submit {
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #003f5c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form .btn-submit:hover {
  background-color: #ffa600;
}

/* Informations supplémentaires */
.contact-info-section {
  margin-top: 30px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info-section .info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.contact-info-section .info-item i {
  color: #003f5c;
  margin-right: 10px;
  font-size: 18px;
}

/* Réseaux sociaux */
.social-media-section {
  margin-top: 20px;
  text-align: center;
}

.social-media-section h3 {
  margin-bottom: 15px;
  color: #003f5c;
}

.social-media-section .social-icons a {
  color: white;
  background-color: #003f5c;
  padding: 10px;
  margin: 0 5px;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  transition: transform 0.3s;
}

.social-media-section .social-icons a:hover {
  background-color: #ffa600;
  transform: scale(1.1);
}
</style>
  