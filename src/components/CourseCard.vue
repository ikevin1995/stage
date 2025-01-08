<template>
  
    <div class="course-card">
      <h3>{{ course.title }}</h3>
      <p>{{ course.description }}</p>
      <a :href="`/courses/${course.id}`">Voir plus</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      course: Object,
    },
  };
  </script>
  
  <style scoped>
  .course-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .course-card h3 {
    margin: 0 0 10px;
  }
  
  .course-card a {
    color: #007bff;
    font-weight: bold;
    text-decoration: none;
  }
  
  .course-card a:hover {
    text-decoration: underline;
  }
  </style>
  