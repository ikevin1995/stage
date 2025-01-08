import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import "@fortawesome/fontawesome-free/css/all.css";
import router from './router'; // Importation du routeur

createApp(App).use(router).mount('#app');



