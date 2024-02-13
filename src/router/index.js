import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home.vue'
import megasena from '../views/megasena.vue'
import duplasena from '../views/duplasena.vue'
import quina from '../views/quina.vue'
import lotofacil from '../views/lotofacil.vue'

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/megasena',
        name: 'megasena',
        component: megasena
    },
    {
        path:'/duplasena',
        name: 'duplasena',
        component: duplasena
    },
    {
        path:'/quina',
        name: 'quina',
        component: quina
    },
    {
        path:'/lotofacil',
        name: 'lotofacil',
        component: lotofacil
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router