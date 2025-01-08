import { createRouter, createWebHistory } from 'vue-router';

// Importation des vues
import HomePage from '../views/HomePage.vue';
import CourseList from '../views/CourseList.vue';
import LoginPage from '../views/LoginPage.vue';
import StudentRegister from '../views/StudentRegister.vue';
import AddCourse from '../views/AddCourse.vue';
import AddTeacher from '../views/AddTeacher.vue';
import FollowCourse from '../views/FollowCourse.vue';
import PaymentForm from '../views/PaymentForm.vue';
import StudentList from '@/views/StudentList.vue';
import TeacherList from '@/views/TeacherList.vue';
import Dashboard from '@/views/Dashboard.vue';
import Userlist from '@/views/Userlist.vue';
import EditUser from '@/views/EditUser.vue';
import PaymentList from '@/views/PaymentList.vue';
import ContactPage from '@/views/ContactPage.vue';
import AddUser from '@/views/AddUser.vue';
import ProfilPage from '@/views/ProfilPage.vue';
import EditProfile from '@/views/EditProfile.vue';
import descriptionCours from '@/views/descriptionCours.vue';

import MyCourses from '@/views/MyCourses.vue';


// Définition des routes
const routes = [
    { path: '/', name: 'Home', component: HomePage }, // Route pour la page d'accueil
    { path: '/courses', name: 'Courses', component: CourseList }, // Route pour la liste des cours
    { path: '/login', name: 'Login', component: LoginPage }, // Route pour la page de connexion
    { path: '/register', name: 'Register', component: StudentRegister }, // Route pour l'inscription
    { path: '/add-course', name: 'AddCourse', component: AddCourse }, // Route pour ajouter un cours
    { path: '/add-teacher', name: 'AddTeacher', component: AddTeacher }, // Route pour ajouter un professeur
    { path: '/follow', name: 'follow-c', component: FollowCourse },
    { path: '/payment', name: 'Payment', component: PaymentForm },
    { path: '/students', name: 'Student', component: StudentList },
    { path: '/teacher', name: 'Teacher', component: TeacherList },
    { path: '/dashboard', name: 'AdminDashboard', component: Dashboard }, // Route pour le dashboard de l'Admin
    { path: '/user', name: 'User', component: Userlist },
    { path: '/edit-user/:id', name: 'EditUser', component: EditUser, props: true },
    { path: '/payList', name: 'Paylist', component: PaymentList },
    { path: '/Call', name: 'call', component: ContactPage },
    { path: '/adduser', name: 'Adduser', component: AddUser },
    { path: '/profil', name: 'Profil', component: ProfilPage },
    { path: '/profile/edit', name: 'UserProfile', component: EditProfile },
    { path: '/course/:courseId', name: 'descriptionCours', component: descriptionCours },
    { path: '/mycourse', name: 'Mycourse', component: MyCourses },
];

// Création du routeur
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Middleware pour gérer les permissions
router.beforeEach((to, from, next) => {
    const isAuthenticated = true; // Exemple : Définir si l'utilisateur est connecté
    const isAdmin = true; // Exemple : Vérifiez si l'utilisateur est administrateur

    if (!isAuthenticated && to.name !== 'Login') {
        // Si l'utilisateur n'est pas connecté, redirigez vers la page de connexion
        return next('/login');
    }

    if (to.path.startsWith('/admin') && !isAdmin) {
        // Si la route est réservée aux admins et que l'utilisateur n'est pas admin
        return next('/'); // Redirigez vers la page d'accueil
    }

    // Si tout va bien, autorisez la navigation
    next();
});

export default router;