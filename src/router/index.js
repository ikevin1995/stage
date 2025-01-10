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
 import FeesDetails from '@/views/FeesDetails';



 // Définition des routes
 const routes = [
     { path: '/', name: 'Home', component: HomePage },
     { path: '/courses', name: 'Courses', component: CourseList },
     { path: '/login', name: 'Login', component: LoginPage },
     { path: '/register', name: 'Register', component: StudentRegister },
     { path: '/add-course', name: 'AddCourse', component: AddCourse },
     { path: '/add-teacher', name: 'AddTeacher', component: AddTeacher },
     { path: '/follow', name: 'FollowCourse', component: FollowCourse },
     { path: '/payment', name: 'Payment', component: PaymentForm },
     { path: '/students', name: 'StudentList', component: StudentList },
     { path: '/teachers', name: 'TeacherList', component: TeacherList },
     { path: '/dashboard', name: 'Dashboard', component: Dashboard },
     { path: '/users', name: 'UserList', component: Userlist },
     { path: '/edit-user/:id', name: 'EditUser', component: EditUser, props: true },
     { path: '/Paylist', name: 'paymentList', component: PaymentList },
     { path: '/contact', name: 'Contact', component: ContactPage },
     { path: '/add-user', name: 'AddUser', component: AddUser },
     { path: '/profile', name: 'Profile', component: ProfilPage },
     { path: '/profile/edit', name: 'EditProfile', component: EditProfile },
     { path: '/course/:courseId', name: 'CourseDescription', component: descriptionCours, props: true },
     { path: '/mycourses', name: 'mycourses', component: MyCourses },
     { path: '/payment-details/Id', name: 'PaymentDetails', component: FeesDetails },
 ];

 // Création du routeur
 const router = createRouter({
     history: createWebHistory(),
     routes,
 });
 export default router;