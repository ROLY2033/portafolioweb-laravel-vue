import { createRouter, createWebHistory } from "vue-router";
// admin
import homeAdminIndex from "../admin/home/index.vue"
// pages
import homePageIndex from "../pages/home/index.vue"

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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
