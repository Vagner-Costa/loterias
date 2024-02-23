import {defineStore} from 'pinia'
import {useSorteio} from '../store/sorteio'
import {useModalMsg} from '../store/modalMsg'

export const useSalvarJogo = defineStore('salvarJogo',{
    state: () => ({}),
    getters : {},
    actions : {
        actionsSalvarJogo(payload){
            const nome = payload.nome
            let temJogo = null
            let array_apostas = []
            
            temJogo = localStorage.getItem(nome)

            if(temJogo  === null){
                array_apostas.push(payload) 
                localStorage.setItem(nome , JSON.stringify(array_apostas))
            }else{
                array_apostas.push(...JSON.parse(localStorage.getItem(nome)), payload)
                localStorage.setItem(nome, JSON.stringify(array_apostas))
            }

            useModalMsg().actionsModalMsg('Aposta salva com sucesso!')
            setTimeout(()=>{
                useSorteio().actionsLimparSorteio()
                useModalMsg().actionsModalMsg(null)
            },1000)
        }
    }
})