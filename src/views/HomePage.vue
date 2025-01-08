<template>
  <div class="home">
    <!-- Section Banner -->
    <section class="banner">
      <h1>Transformez votre avenir</h1>
      <p>Apprenez à votre rythme avec des cours créés par des experts.</p>
      <a href="/courses" class="cta">Commencez maintenant</a>
    </section>

    <!-- Section Courses -->
    <section class="courses">
      <h2>Découvrez nos cours populaires</h2>
      <div class="courses-grid">
        <div v-for="(course, index) in courses" :key="index" class="course-card">
          <img :src="course.image" :alt="course.title" />
          <h3>{{ course.title }}</h3>
          <p>{{ course.shortDescription }}</p>
          <button class="btn" @click="redirectToCourse(index)">Voir les détails</button>
      </div >
      </div>
    </section>
    <div class="bna">
      
      <a href="/courses" class="cta">voire les autres cours disponible</a>
    </div>

    <!-- Section Features -->
    <section class="features">
      <h2>Pourquoi nous choisir ?</h2>
      <div class="features-grid">
        <div class="feature">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&fit=crop&w=150&h=150" alt="Qualité" />
          <h3>Cours de qualité</h3>
          <p>Apprenez auprès des meilleurs enseignants.</p>
        </div>
        <div class="feature">
          <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&fit=crop&w=150&h=150" alt="Accessibilité" />
          <h3>Accessibilité</h3>
          <p>Disponible 24/7 pour apprendre où que vous soyez.</p>
        </div>
        <div class="feature">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&fit=crop&w=150&h=150" alt="Certifications" />
          <h3>Certifications</h3>
          <p>Obtenez des certifications reconnues.</p>
        </div>
      </div>
    </section>

    <!-- Section Testimonials -->
    <section class="testimonials">
      <h2>Ce que disent nos étudiants</h2>
      <div class="testimonial-slider">
        <div class="testimonial">
          <p>"Grâce à cette plateforme, j'ai changé de carrière !"</p>
          <span>- Marc, développeur web</span>
        </div>
        <div class="testimonial">
          <p>"J'ai acquis de nouvelles compétences qui m'ont permis d'obtenir une promotion."</p>
          <span>- Clara, gestionnaire de projet</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          title: "Introduction au développement web",
          shortDescription: "Apprenez les bases du HTML, CSS et JavaScript.",
          longDescription:
            "Ce cours vous initiera aux concepts fondamentaux du développement web, y compris la création de sites interactifs.",
            temps:"volume Horaire: est de 120h",
            image: require('@/assets/insert-image-html.jpg'),

        },
        {
          title: "Python pour les débutants",
          shortDescription:
            "Découvrez l'un des langages de programmation les plus populaires.",
          longDescription:
            "Python est un langage polyvalent, idéal pour les débutants. Apprenez les bases et comment l'utiliser dans divers projets.",
            temps:"volume Horaire: est de 120h",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&fit=crop&w=400&h=200",
        },
        {
          title: "UX/UI Design",
          shortDescription:
            "Maîtrisez les principes du design moderne pour améliorer l'expérience utilisateur.",
          longDescription:
            "Découvrez les bases du design UX/UI, apprenez à créer des interfaces utilisateur intuitives et à optimiser l'expérience.",
            temps:"volume Horaire: est de 120h",
          image:
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&fit=crop&w=400&h=200",
        },
      ],
    };
  },methods: {
  redirectToCourse(index) {
    const selectedCourse = this.courses[index];
    if (!selectedCourse) return;

    this.$router.push({
      name: 'descriptionCours',
      params: { courseId: index },
      query: {
        title: selectedCourse.title,
        description: selectedCourse.longDescription,
        temps: selectedCourse.temps
      },
    });
  },
},

};
</script>

<style>
/* Section Banner */
.banner {
  text-align: center;
  background-image: url('@/assets/etudiant.jpg');
  height: 70vh;
  background-size: cover;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.banner h1 {
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.2s ease;
}

.banner p {
  font-size: 20px;
  margin-bottom: 30px;
  animation: fadeIn 1.5s ease;
}

.cta {
  background-color: #ff6f61;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  transition: transform 0.3s, background-color 0.3s;
}

.cta:hover {
  transform: scale(1.1);
  background-color: #ff4b47;
}

/* Section Features */
.features {
  text-align: center;
  padding: 50px 20px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-10px);
}

/* Section Testimonials */
.testimonials {
  background-color: #f9f9f9;
  padding: 50px 20px;
  text-align: center;
}

.testimonial-slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-snap-type: x mandatory;
}

.testimonial {
  scroll-snap-align: center;
  flex: 0 0 80%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.testimonial:hover {
  transform: scale(1.05);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Section Courses */
.courses {
  text-align: center;
  padding: 50px 20px;
  background-color: #f4f4f4;
}

.courses h2 {
  font-size: 32px;
  margin-bottom: 30px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.course-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.course-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.course-card h3 {
  font-size: 20px;
  margin: 15px 0 10px;
  color: #333;
}

.course-card p {
  font-size: 16px;
  color: #666;
  padding: 0 15px;
  margin-bottom: 15px;
}

.course-card .btn {
  display: block;
  margin: 10px auto 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
}

.course-card .btn:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.course-card:hover {
  transform: translateY(-10px);
}

/* Ajout de transitions globales */
h2, h3, p {
  animation: fadeIn 1s ease;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }

  .course-card {
    margin: 0 auto;
  }
}
.bna{
  
  font-size: 20px;
  margin-bottom: 30px;
  animation: fadeIn 1.5s ease;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #333;
}


</style>