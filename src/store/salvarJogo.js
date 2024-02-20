import {defineStore} from 'pinia'
import {useSorteio} from '../store/sorteio'
import {useModalMsg} from '../store/modalMsg'

export const useSalvarJogo = defineStore('salvarJogo',{
    state: () => ({}),
    getters : {},
    actions : {
        actionsSalvarJogo(payload){
            const {nome,num_sorteado} = payload
            let temJogo = null
            
            temJogo = localStorage.getItem(nome)

            if(temJogo  === null){
                localStorage.setItem(nome , JSON.stringify([...num_sorteado]))
            }else{
                localStorage.setItem(nome, [
                    localStorage.getItem(nome), JSON.stringify([...num_sorteado])
                ])
            }

            useModalMsg().actionsModalMsg('Aposta salva com sucesso!')
            setTimeout(()=>{
                useSorteio().actionsLimparSorteio()
                useModalMsg().actionsModalMsg(null)
            },2000)
        }
    }
})