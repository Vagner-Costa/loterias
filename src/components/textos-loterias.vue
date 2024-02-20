<template>
    <div class="w-full">
        <p class="text-18px">{{ paragrafo1 }}</p>
    </div>
</template>

<script setup>
    import { inject } from 'vue'

    const paragrafo1 = inject('paragrafo1')
</script>

<style scoped>

</style>