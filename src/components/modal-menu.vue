<template>
    <div @click="toggleModal.actionsModalMenu(null)"
        class="w-full h-full min-h-screen bg-preto/70 absolute z-10 top-0 left-0"
    >
        <header @click.stop=""
            class="w-[220px] h-full flex flex-col items-start px-10px pt-40px fixed top-0 
                transition-all"
            :class="toggleModal.gettersMenuModal ? 
                ['ml-0px', 'md:ml-0px'] 
                    : 
                ['ml-[-220px]', 'md:ml-[-250px]']"
            :style="{backgroundColor:cor}"
        >
            <button class="text-20px text-branco" @click="minhasApostas()">Minhas apostas</button>
            <button class="text-20px text-branco" @click="resultados()">Resultados</button>
            <button class="text-20px text-branco" @click="toggleModal.actionsModalMenu(null)">Fechar</button>
            <button class="text-20px text-branco" @click="sair">Sair</button>
        </header>
    </div>
</template>

<script setup>
    import { inject } from 'vue'
    import {useModalMenu}  from '../store/modalMenu.js'
    import { useRouter }from 'vue-router'

    const cor = inject('cor')
    const toggleModal = useModalMenu()
    const router = useRouter()

    const minhasApostas = (payload)=>{
        toggleModal.actionsModalMenu(null)
    }

    const resultados = (payload)=>{
        toggleModal.actionsModalMenu(null)
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