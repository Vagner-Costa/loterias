<template>

    <div v-if="sorteio.gettersSorteio.length > 0"
        class="w-full h-full flex flex-col justify-end absolute bg-preto/0 top-0px 
        left-0px p-7px overflow-hidden"
    >
        <div class="w-full flex flex-row">
            <div class="w-[10%] md:w-[7%]"></div>
            <p class="text-[16px] text-vermelho my-5px">Selecione para salvar esse jogo.</p>
        </div>
        
        <div class="w-full flex flex-row ">
            <div class="w-[10%] md:w-[7%]"></div>
            <div class="w-[90%] h-50px flex flex-row justify-between items-center
                md:w-[93%] bg-amarelo md:h-60px relative p-10px"
            >
                <button @click="$emit('cancelar',null)"
                    class="w-[49%] h-full border-x-2 border-x-vermelho bg-branco rounded-[5px]
                    font-normal text-18px text-vermelho md:text-[20px] 
                    hover:bg-vermelho hover:text-branco hover:border-none
                    md:h-full"
                >
                    Cancelar
                </button>

                <button @click="$emit('salvar')"
                    class="w-[49%] h-full border-x-2 border-x-vermelho bg-branco rounded-[5px]
                        font-normal text-18px text-vermelho md:text-[20px] 
                        hover:bg-megaSena hover:text-branco hover:border-none
                        md:h-full"
                >
                    Salvar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useSorteio } from '../store/sorteio'

    const sorteio = useSorteio()
</script>

<style  scoped>
</style>