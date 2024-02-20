<template>
    <article class="w-full flex flex-col p-20px my-20px border border-[#ddd]">
        <div class="w-full h-60px flex centralizado flex-row"
        >
            <img v-if="titulo === 'duplaSena'" 
                class="w-40px h-40px mr-5px rotate-45" 
                src="../assets/duplaSena2.png" alt="logo"
            >
            <img v-if="titulo === 'lotofacil'" 
                class="w-40px h-40px mr-5px rotate-45" 
                src="../assets/lotofacil2.png" alt="logo"
            >
            <img v-if="titulo === 'megaSena'" 
                class="w-40px h-40px mr-5px rotate-45" 
                src="../assets/mega2.png" alt="logo"
            >
            <img v-if="titulo === 'quina'" 
                class="w-40px h-40px mr-5px rotate-45" 
                src="../assets/quina2.png" alt="logo"
            >
            <h1 class="font-titulo font-semibold text-[#666] text-[40px] italic uppercase">{{ titulo }}</h1>
        </div>

        <p v-if="dados.getersConsultaLoteria">
            Data do último sorteio: {{ dados.getersConsultaLoteria.data }}
        </p>
        <p v-if="dados.getersConsultaLoteria">
            Consurso: {{ dados.getersConsultaLoteria.concurso }}
        </p>
        <p v-if="dados.getersConsultaLoteria" class="w-full flex flex-wrap flex-row">
            Dezenas sorteadas: 
        </p>
        <article v-if="dados.getersConsultaLoteria" class="w-full flex flex-row flex-wrap">
            <div v-for="num, index in dados.getersConsultaLoteria.dezenas.sort()" :key="index"
                class="w-40px h-40px rounded-full relative border border-[#ccc] flex
                centralizado bg-[#eee] m-[5px] sombra font-semibold text-[#666] overflow-hidden"
            >
                <div class="w-30px h-30px border-[4px] rounded-full border-azul/20 absolute top-[-22px]"></div>
                <div class="w-30px h-30px border-[4px] rounded-full border-azul/20 absolute left-[-22px]"></div>
                {{ num }}
                <div class="w-30px h-30px border-[4px] rounded-full border-azul/20 absolute bottom-[-22px]"></div>
                <div class="w-30px h-30px border-[4px] rounded-full border-azul/20 absolute right-[-22px]"></div>   
            </div>
        </article>

        <table v-if="dados.getersConsultaLoteria" class="w-full my-30px">
            <tr class="flex flex-col justify-between">
                <thead class="w-full h-30px flex justify-between items-center"
                    :style="{backgroundColor:cor}"
                >
                    <td class="w-[33%] border flex centralizado text-branco overflow-hidden" 
                        translate="no"
                    >
                        Acertos:
                    </td> 
                    <td class="w-[33%] border flex centralizado text-branco overflow-hidden" 
                        translate="no"
                    >
                        Ganhadores:
                    </td> 
                    <td class="w-[33%] border flex centralizado text-branco overflow-hidden" 
                        translate="no"
                    >
                        Valor:
                    </td>
                </thead>
                <td v-for="dados,index in dados.getersConsultaLoteria.premiacoes" :key="index" class="flex flex-row justify-between">
                    
                    <p translate="no" class="w-[33%] flex justify-start items-center border border-[#ddd]">
                        {{ dados.descricao }}
                    </p>
                    <p translate="no" class="w-[33%] flex centralizado border border-[#ddd]">
                        {{ dados.ganhadores }}
                    </p>
                    <p translate="no" class="w-[33%] flex centralizado border border-[#ddd]">
                        {{ dados.valorPremio }}
                    </p>
                </td>

            </tr>
        </table>

        <p v-if="dados.getersConsultaLoteria" translate="no">Próximo concurso: {{ dados.getersConsultaLoteria.proximoConcurso}}</p>
        <p v-if="dados.getersConsultaLoteria" translate="no">Data próximo concurso: {{ dados.getersConsultaLoteria.dataProximoConcurso}}</p>
        <p v-if="dados.getersConsultaLoteria" translate="no">Valor estimado: {{ dados.getersConsultaLoteria.valorEstimadoProximoConcurso}}</p>

        <!-- <p>Concurso: {{ dados.getersConsultaLoteria }}</p> -->
        <!-- <p>{{ dados.getersConsultaLoteria.dezenas }}</p> -->
    </article>
</template>

<script setup>
    import {useConsultaLoterias } from '../store/consultaLoterias.js'
    import { inject } from 'vue'

    const dados = useConsultaLoterias()

    const titulo = inject('titulo')
    const cor = inject('cor')



</script>

<style scoped>
    .sombra{
        box-shadow:2px 2px 5px #888
    }
</style>