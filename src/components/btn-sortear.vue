<template>
    <div class="w-full flex flex-row justify-between mt-10px">
        <div class="w-[10%] min-w-[10%] md:w-[7%] md:min-w-[7%] h-50px"></div>
        <button @click="$emit('apostar')"
            class="w-[90%] min-w-[90%] md:w-[93%] md:min-w-[93%] h-40px flex centralizado 
            rounded-[5px] border-2 border-branco hover:border-none md:h-60px "
            :style="{backgroundColor:cor}"
        >
            <p class="font-medium text-18px text-branco md:font-semibold md:text-[25px]">Sortear</p>
        </button>
    </div>
</template>

<script setup>
    import {inject} from 'vue'

    const cor = inject('cor')
</script>

<style scoped>

</style>