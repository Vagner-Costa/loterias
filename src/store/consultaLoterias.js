import { defineStore } from "pinia"
import axios from "axios"
import { url } from "../services/api-loterias.js"

export const useConsultaLoterias = defineStore('consultaLoterias',{
    state: () => ({
        dados_loteria : null
    }),
    getters:{
        getersConsultaLoteria : (state)=>{
            return state.dados_loteria;
        }
    },
    actions:{
        actionsConsultaLoterias(payload){
            const loteria = payload.loteria
            this.dados_loteria = null

            axios.get(`${url}/${loteria}/latest`)
            .then((response)=>{
                this.dados_loteria = response.data
            })
            .catch((error)=>{console.log(error)})
        }
    }
})