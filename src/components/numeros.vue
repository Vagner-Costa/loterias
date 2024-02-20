<template>
    <h2 v-if="sorteado.gettersSorteio.num_sorteados.length > 0"
        class="w-full text-[20px] text-[#888] text-center"
    >
        Ordem do sorteio
    </h2>


        <div class="w-full min-h-100px flex flex-wrap centralizado my-10px"
            :class="sorteado.gettersSorteio.num_sorteados.length > 0 ?
                'numeros_abertos'
                    :
                'numeros_fechados'"
        >
            <!--  -->
            <div v-for="num, index in sorteado.gettersSorteio.num_sorteados" :key="index"
                class="relative w-50px h-50px rounded-full border border-[#ddd] flex 
                    centralizado mx-5px my-7px bg-[#eee] sombra
                    md:w-60px md:h-60px overflow-hidden
                "
                :class="sorteado.gettersSorteio.num_sorteados.length > 0 && 'animacao_bolas'"
                
            >
                <div class="w-40px h-40px border-[5px] border-azul/20 absolute 
                    rounded-full mt-[-75px] md:w-50px md:h-50px md:border-[7px] md:mt-[-80px]"
                >
                </div>
                <div class="w-40px h-40px border-[5px] border-azul/20 absolute 
                    rounded-full ml-[-75px] md:w-50px md:h-50px md:border-[7px] md:ml-[-80px]"
                >
                </div>
                <p class="text-[25px] font-bold text-[#666]">{{ num < 10 ? '0'+num : num }}</p> 
                <div class="w-40px h-40px border-[5px] border-azul/20 absolute 
                    rounded-full mb-[-75px] md:w-50px md:h-50px md:border-[7px] md:mb-[-80px]"
                >
                </div>
                <div class="w-40px h-40px border-[5px] border-azul/20 absolute 
                    rounded-full mr-[-75px] md:w-50px md:h-50px md:border-[7px] md:mr-[-80px]"
                >
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
    @keyframes rodar{
        0% { transform:rotate(0deg)}
        100% { transform:rotate(360deg)}
    }
    .animacao_bolas{
        animation-name:rodar;
        animation-duration: 1s;
        animation-timing-function: linear;
    }

</style>