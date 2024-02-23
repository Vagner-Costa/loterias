import { defineStore } from "pinia"
import {url} from '../services/api-loterias.js'
import axios from 'axios'

export const useConsultaPorConcurso = defineStore('consultaPorConcurso',{
    state : ()=>({
        concurso_pesquisado : null
    }),
    getters : {
        gettersConsultaPorConcurso : (state)=>{
            return state.concurso_pesquisado
        }
    },
    actions:{
        actionsConsultaPorConcurso(payload){
            this.concurso_pesquisado = null

            axios.get(`${url}/${payload.loteria}/${payload.concurso}`)
            .then((response)=>{
                if(response.data){
                    this.concurso_pesquisado = response.data
                }
            })
            .catch((error)=>{console.log(error)})
        },
        actionsLimparConsultaPorConcurso(){
            this.concurso_pesquisado = null
        }
    },
})  