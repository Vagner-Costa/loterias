<template>
    <div class="w-full flex flex-row">
        <div class="w-[10%]"></div>
        <div class="w-[90%] flex flex-col">
            <p class="text-[12px] text-vermelho my-5px">Assinale quantos números deseja apostar:</p>
            <div class="w-full h-30px bg-amarelo flex flex-row px-5px items-center justify-start">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>