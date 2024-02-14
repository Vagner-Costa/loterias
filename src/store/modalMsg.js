import {defineStore} from 'pinia'

export const useModalMsg = defineStore('modalMsg',{
    state: ()=>({
        toggleModalMsg : false,
        msg: ''
    }),
    getters:{
        gettersModalMsg : (state)=>{
            return state.toggleModalMsg
        },
        gettersMsg : (state)=>{
            return state.msg
        }

    },
    actions: {
        actionsModalMsg(payload){
            this.toggleModalMsg = !this.toggleModalMsg
            this.msg = payload
        }
    }
})