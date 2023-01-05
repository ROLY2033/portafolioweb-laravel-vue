import './bootstrap';

import { createApp } from 'vue'
// no coloar en ./ solo / para la ruta inicial
import app from '/resources/components/app.vue'

createApp(app).mount("#app")
