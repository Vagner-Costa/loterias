import { defineStore } from "pinia"

export const useSorteio = defineStore('sorteio',{
    state: () => ({
            num_sorteados : [],
    }),
    getters:{
        gettersSorteio : (state)=>{
            return state.num_sorteados
        }
    }, 
    actions:{
        actionsSorteio(payload){
            const {tam, qtde, jogo} = payload
            this.num_sorteados = []
            
            while(this.num_sorteados.length < qtde){
                let n = Math.floor(Math.random() * tam) + 1 
                n = n < 10 ? '0'+n : n
                let resposta = this.num_sorteados.find((e)=>{
                    if (e == n) {
                        return true
                    }
                })

                if(resposta === undefined && n !== 0){
                    this.num_sorteados.push(n)
                }
            }
        },
        actionsLimparSorteio(){
            this.num_sorteados =[]
        }
    }

})