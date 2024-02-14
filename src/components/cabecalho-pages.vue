<template>
    <header class="w-full min-w-full h-80px flex items-center justify-end py-10px px-10px
        md:px-50px"
        :style="{backgroundColor:cor}"
    >
        <button @click="toggleModal.actionsModalMenu(titulo)">
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