import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home.vue'
import megasena from '../views/megasena.vue'
import duplasena from '../views/duplasena.vue'
import quina from '../views/quina.vue'
import lotofacil from '../views/lotofacil.vue'
import minhasApostasDuplaSena from '../views/minhasApostasDuplaSena.vue'
import minhasApostasLotofacil from '../views/minhasApostasLotofacil.vue'
import minhasApostasMegaSena from '../views/minhasApostasMegaSena.vue'
import minhasApostasQuina from '../views/minhasApostasQuina.vue'

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/duplasena',
        name: 'duplasena',
        component: duplasena
    },
    {
        path:'/lotofacil',
        name: 'lotofacil',
        component: lotofacil
    },
    {
        path:'/megasena',
        name: 'megasena',
        component: megasena
    },
    {
        path:'/quina',
        name: 'quina',
        component: quina
    },
    {
        path:'/minhasApostasDuplaSena',
        name: 'minhasApostasDuplaSena',
        component: minhasApostasDuplaSena
    },
    {
        path:'/minhasApostasLotofacil',
        name: 'minhasApostasLotofacil',
        component: minhasApostasLotofacil
    },
    {
        path:'/minhasApostasMegaSena',
        name: 'minhasApostasMegaSena',
        component: minhasApostasMegaSena
    },
    {
        path:'/minhasApostasQuina',
        name: 'minhasApostasQuina',
        component: minhasApostasQuina
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router