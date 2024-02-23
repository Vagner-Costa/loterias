<template>
    <div @click="toggleModal.actionsModalMenu(null)"
        class="w-full h-full min-h-screen bg-preto/70 fixed z-10 top-0 left-0"
    >
        <header @click.stop=""
            class="w-[220px] h-full flex flex-col items-start pt-100px fixed top-0 
                transition-all"
            :class="toggleModal.gettersMenuModal ? 
                ['ml-0px', 'md:ml-0px'] 
                    : 
                ['ml-[-220px]', 'md:ml-[-250px]']"
            :style="{backgroundColor:cor}"
        >
            <button class="w-full hover:bg-branco/20 text-start px-10px py-5px" 
                @click="apostar()"
            >
                <p class="text-branco text-[20px]" translate="no">Home</p>
            </button>

            <button class="w-full hover:bg-branco/20 text-start px-10px py-5px" 
                @click="minhasApostas()"
            >
                <p class="text-branco text-[20px]" translate="no">Minhas apostas</p>
                
            </button>

            <button class="w-full hover:bg-branco/20 text-start px-10px py-5px" 
                @click="toggleModal.actionsModalMenu(null)"
            >
                <p class="text-branco text-[20px]" translate="no">Fechar</p>
            </button>

            <button class="w-full hover:bg-branco/20 text-start px-10px py-5px" 
                @click="sair"
            >
                <p class="text-branco text-[20px]" translate="no">Sair</p>
                
            </button>
        </header>
    </div>
</template>

<script setup>
    import { inject } from 'vue'
    import {useModalMenu}  from '../store/modalMenu.js'
    import { useRouter }from 'vue-router'

    const cor = inject('cor')
    const titulo = inject('titulo')

    const toggleModal = useModalMenu()
    const router = useRouter()

    const minhasApostas = ()=>{
        toggleModal.actionsModalMenu(null)
        router.push(`minhasApostas${titulo}`)
    }

    const apostar = (payload)=>{
        toggleModal.actionsModalMenu(null)
        router.push(`${titulo}`)
    }

    const sair = ()=>{
        toggleModal.actionsModalMenu(null)
        setTimeout(()=>{
            router.push('/')
        },100) 
    }
</script>

<style lang="scss" scoped>

</style>