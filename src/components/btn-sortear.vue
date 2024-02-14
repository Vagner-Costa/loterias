<template>
    <div class="w-full flex flex-row justify-between mt-10px">
        <div class="w-[10%] min-w-[10%] h-50px"></div>
        <button @click="$emit('apostar')"
            class="w-[90%] min-w-[90%] h-50px flex centralizado rounded-[5px]"
            :style="{backgroundColor:cor}"
        >
            <p class="text-18px text-branco">Sortear</p>
        </button>
    </div>
</template>

<script setup>
    import {inject} from 'vue'

    const cor = inject('cor')
</script>

<style scoped>

</style>