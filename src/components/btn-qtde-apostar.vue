<template>
    <button @click="$emit('qtdeApostar',props.num)"
        class="w-40px h-30px  border-x border-x-vermelho rounded-[5px] flex 
        items-center justify-center mx-[3px]"
        :class="qtde === props.num ? ['bg-azul'] : ['bg-branco']"
    >
        <p class="text-[14px]"
            :class="qtde === props.num ? ['text-branco'] : ['text-vermelho']"
        >
            {{ props.num }}
        </p>
    </button>
</template>

<script setup>
    import { inject } from 'vue'

    const props = defineProps(['num'])
    const qtde = inject('qtde')
</script>

<style scoped>
    

</style>