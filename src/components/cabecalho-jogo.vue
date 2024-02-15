<template>
    <div class="w-full h-60px flex flex-row md:h-100px">
        <div class="w-[10%] h-full min-w-[10%]
            md:w-[7%] md:min-w-[7%]"
        >
        </div>

        <div class="w-[90%] min-w-[90%] h-full flex centralizado
            md:w-[93%] md:min-w-[93%]"
            :style="{backgroundColor:cor}"
        >
            <img v-if="titulo === 'duplaSena'" 
                class="w-45px h-45px rotate-45 mr-5px z-0 md:w-60px md:h-60px" 
                src="../assets/duplaSena.png" 
                alt="logo"
            >
            <img v-if="titulo === 'lotofacil'" 
                class="w-45px h-45px rotate-45 mr-5px z-0 md:w-60px md:h-60px"  
                src="../assets/lotofacil.png" 
                alt="logo"
            >
            <img v-if="titulo === 'megaSena'" 
                class="w-45px h-45px rotate-45 mr-5px z-0 md:w-60px md:h-60px" 
                src="../assets/megaSena.png" 
                alt="logo"
            >
            <img v-if="titulo === 'quina'" 
                class="w-45px h-45px rotate-45 mr-5px z-0 md:w-60px md:h-60px"  
                src="../assets/quina.png" 
                alt="logo"
            >
            <p class="font-titulo text-[40px] font-semibold text-branco uppercase italic md:text-[60px] md:font-bold">
                {{ titulo }}
            </p>
        </div>
    </div>

</template>

<script setup>
    import { inject } from 'vue'

    const cor = inject('cor')
    const titulo = inject('titulo')
</script>

<style scoped>

</style>