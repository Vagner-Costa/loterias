import { defineStore } from "pinia"

export const useSorteio = defineStore('sorteio',{
    state: () => ({
        controle:{
            tipo_jogo : null,
            num_sorteados : [],
        }
    }),
    getters:{
        gettersSorteio : (state)=>{
            return state.controle
        }
    },
    actions:{
        actionsSorteio(payload){
            const {tam, qtde, jogo} = payload
            this.controle.num_sorteados = []
            
            while(this.controle.num_sorteados.length < qtde){
                let n = Math.floor(Math.random() * tam) + 1
                let resposta = this.controle.num_sorteados.find((e)=>{
                    if (e == n) {
                        return true
                    }
                })

                if(resposta === undefined && n !== 0){
                    this.controle.num_sorteados.push(n)
                }
            }
        },
        actionsLimparSorteio(){
            this.controle.tipo_jogo=null
            this.controle.num_sorteados =[]
        }
    }

})