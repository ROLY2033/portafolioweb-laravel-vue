import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// admin
import homeAdminIndex from "../admin/home/index.vue"
// pages
import homePageIndex from "../pages/home/index.vue"
// login
import login from "../auth/login.vue"

import notFound from "../notFound.vue"

const routes = [
    {
        path: '/admin',
        name: 'adminHome',
        component: homeAdminIndex,
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: '/',
        name: 'Home',
        component: homePageIndex,
        meta:{
            requiresAuth: false,
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound,
        meta:{
            requiresAuth: false,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component:  login,
        meta:{
            requiresAuth: false,
        }
    }
]

const router = createRouter({
    // utilizar el metodo Hash para que al momento de erealizar un actulizacion no se refresque
    // la ruta
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from) =>{
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
        return {name: 'Login'}
    }
    // if(to.meta.requiresAuth == false && localStorage.getItem('token')){
    //     return {path: '/*'}
    // }

})

export default router
