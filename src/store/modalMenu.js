import { defineStore } from "pinia"

export const useModalMenu = defineStore('modalMenu',{
    state: ()=>({
        qualModal :null,
        toggleMenuModal : false
    }),
    getters: {
        gettersModalMenu : (state)=>{
            return  state.qualModal
        },
        gettersMenuModal : (state)=>{
            return state.toggleMenuModal
        }
    },
    actions: {
        actionsModalMenu(payload){
            if(payload !== null){
                this.qualModal= payload
                setTimeout(()=>{
                    this.toggleMenuModal = true
                },100)
            }else{
                this.toggleMenuModal = false
                setTimeout(()=>{
                    this.qualModal= payload
                },100)
            }
        }
    }
})