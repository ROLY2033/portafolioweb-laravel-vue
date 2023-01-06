import { createRouter, createWebHistory } from "vue-router";
// admin
import homeAdminIndex from "../admin/home/index.vue"
// pages
import homePageIndex from "../pages/home/index.vue"
// login
import login from "../auth/login.vue"

import notFound from "../notFound.vue"

const routes = [
    {
        path: '/admin/home',
        component: homeAdminIndex
    },
    {
        path: '/',
        component: homePageIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
    {
        path: '/login',
        component:  login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
