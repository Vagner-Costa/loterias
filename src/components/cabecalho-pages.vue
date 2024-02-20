<template>
    <header class="w-full min-w-full h-80px flex items-center justify-end py-10px px-10px
        md:px-50px fixed top-0px left-0px z-40"
        :style="{backgroundColor:cor}"
    >
        <button @click="toggleModal.actionsModalMenu(titulo)" class="z-10">
            <img class="w-40px h-40px" src="../assets/menu.png" alt="menu">
        </button>
        
    </header>
</template>

<script setup>
    import { inject } from 'vue'
    import {useModalMenu} from '../store/modalMenu'

    const cor = inject( 'cor' )
    const titulo = inject('titulo')
    const toggleModal = useModalMenu()

</script>

<style lang="scss" scoped>

</style>