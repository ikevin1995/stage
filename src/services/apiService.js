// src/services/api.js
import axios from "axios";

// Configurer l'instance Axios avec l'URL de base
const apiClient = axios.create({
  baseURL: "http://localhost:8000/courseapp", // Base URL pour l'API backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Service pour les appels API liés aux enseignants
export const TeacherService = {
  // Récupérer la liste des enseignants
  getTeachers() {
    return apiClient.get("/register/teacher");
  },
  
  // Ajouter d'autres fonctions liées aux enseignants si nécessaire
  // Exemple : Supprimer un enseignant
  deleteTeacher(teacherId) {
    return apiClient.delete(`/register/teacher/${teacherId}/`);
  },
};
