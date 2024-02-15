<template>
    <div class="w-full flex flex-row">
        <div class="w-[10%] md:w-[7%]"></div>
        <div class="w-[90%] md:w-[93%] flex flex-col">
            <p class="text-[16px] text-vermelho my-5px">Assinale quantos números deseja apostar:</p>
            <div class="w-full h-50px bg-amarelo flex flex-row px-5px items-center justify-start">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>