<template>
    <div class="w-full flex flex-col justify-start items-center my-10px">
        <h2 class="text-[20px] text-[#888] w-full text-center">Ordem do sorteio</h2>
        <div class="w-full flex flex-wrap centralizado ">
            <div v-for="num, index in sorteado.gettersSorteio.num_sorteados" :key="index"
                class="relative w-60px h-60px rounded-full border border-[#ddd] flex 
                    centralizado mx-5px my-7px bg-[#eee] sombra"
            >
                <div class="w-40px h-40px border-[7px] border-azul/20 absolute rounded-full mt-[-80px]"></div>
                <div class="w-40px h-40px border-[7px] border-azul/20 absolute rounded-full ml-[-80px]"></div>
                <p class="text-[25px] font-bold text-[#666]">{{ num < 10 ? '0'+num : num }}</p> 
                <div class="w-40px h-40px border-[7px] border-azul/20 absolute rounded-full mb-[-80px]"></div>
                <div class="w-40px h-40px border-[7px] border-azul/20 absolute rounded-full mr-[-80px]"></div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { useSorteio } from '../store/sorteio'

    const sorteado = useSorteio()

</script>

<style scoped>
    .sombra{
        box-shadow:2px 2px 10px #000
    }
</style>