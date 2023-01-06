import './bootstrap';
import '../css/bootstrap.css'

import { createApp } from 'vue'
// no coloar en ./ solo / para la ruta inicial
import app from '/resources/components/app.vue'

import router from '../components/router';

createApp(app).use(router).mount("#app")
