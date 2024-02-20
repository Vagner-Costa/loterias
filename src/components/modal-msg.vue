<template>
    <div @click="modalMsg.actionsModalMsg('')"
        class="w-full h-full min-h-screen bg-preto/70 z-10 top-0 left-0 fixed flex centralizado"
    >
        <article class="w-[400px] h-[200px] bg-branco absolute ml-0px mt-0px z-50 flex flex-col
            centralizado"
        >
            <img class="w-40px h-40px my-15px" src="../assets/atencao.png" alt="atenção">

            <p class="text-16px text-preto">{{ modalMsg.gettersMsg }}</p>
        </article>
    </div>
</template>

<script setup>
    import { useModalMsg } from '../store/modalMsg.js'

    const modalMsg = useModalMsg()

</script>

<style scoped>

</style>