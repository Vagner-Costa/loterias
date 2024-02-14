<template>
    <div class="w-[90%] bg-amarelo p-10px grid centralizado h-[250px] max-h-[250px]
        gap-1 right-0 "
        :class="titulo === 'lotofacil' ? ['grid-cols-5','gap-y-1'] : ['grid-cols-10']"
    >
        <div v-for="num,index in tam" :key="index"
            class="w-full max-w-40px h-25px bg-branco border-x border-x-vermelho  
             text-center rounded-[5px]"
        >
            <p class="text-vermelho text-16px"
            >
                {{ num < 10  ? '0' + num : num }}
            </p>
        </div>
    </div>
</template>

<script setup>
    import { inject } from 'vue'

    const tam = inject('tam')
    const titulo = inject('titulo')

</script>

<style scoped>

</style>