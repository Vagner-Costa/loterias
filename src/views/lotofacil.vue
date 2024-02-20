<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'lotofacil'"></ModalMenu>
    <modalMsg v-if="modalMsgLotofacil.gettersModalMsg"></modalMsg>
    <main class="w-full h-full min-h-screen bg-branco flex flex-col justify-start 
        items-center pt-90px"
    >
        <!-- Numeros Sorteados -->
        <numeros></numeros>
        
        <!-- Container da Página -->
        <section class="container_pagina"
        >
            <!-- Volante -->
            <div class="volante"
            >
                <cabecalhoJogo></cabecalhoJogo>
                <tracosHoriz></tracosHoriz>
                <div class="w-full flex flex-row relative">
                    <tracosVert></tracosVert>
                    <areaJogo></areaJogo>
                </div>
                <qtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="15"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="16"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="17"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="18"></btnQtdeApostar>
                </qtdeApostar>
                <btnSortear @apostar="apostarLotofacil"></btnSortear>

                <btnExcluirSalvar @salvar="salvarLotofacil" @cancelar="qtdApostarLotofacil"></btnExcluirSalvar>
            </div>

            <!-- Container conteúdos -->
            <article class="container_conteudos">
                <textosLoterias></textosLoterias>

                <dadosApiJogo></dadosApiJogo>
            </article>

        </section>
    </main>
</template>

<script setup>
    import CabecalhoPages from '../components/cabecalho-pages.vue'
    import ModalMenu from '../components/modal-menu.vue'
    import modalMsg from '../components/modal-msg.vue'
    import cabecalhoJogo from '../components/cabecalho-jogo.vue'
    import tracosHoriz from '../components/tracos-horiz.vue'
    import tracosVert from '../components/tracos-vert.vue'
    import areaJogo from '../components/area-jogo.vue'
    import qtdeApostar from '../components/qtde-apostar.vue'
    import btnQtdeApostar from '../components/btn-qtde-apostar.vue'
    import btnSortear from '../components/btn-sortear.vue'
    import numeros from '../components/numeros.vue'
    import btnExcluirSalvar from '../components/btn-salvar-excluir.vue'
    import textosLoterias from '../components/textos-loterias.vue'
    import dadosApiJogo from '../components/dados-api-jogo.vue'
    import {lotofacilParagrafo1} from '../services/textos-lotofacil.js'
    import {useModalMenu} from '../store/modalMenu.js'
    import { useModalMsg } from '../store/modalMsg'
    import { useSorteio } from '../store/sorteio.js'
    import {useConsultaLoterias} from '../store/consultaLoterias.js'
    import { useSalvarJogo } from '../store/salvarJogo.js'
    import { provide, ref, onBeforeMount } from 'vue'

    const toggleModal = useModalMenu()
    const modalMsgLotofacil = useModalMsg()
    const sorteio = useSorteio()
    const consultaLoterias = useConsultaLoterias()
    const salvarJogo = useSalvarJogo()

    const qtdeLotofacil = ref(null)

    provide('cor','#51093B')
    provide('titulo','lotofacil')
    provide('tam',25)
    provide('qtde',qtdeLotofacil)
    provide('paragrafo1',lotofacilParagrafo1)

    onBeforeMount(()=>{
        consultaLoterias.actionsConsultaLoterias({loteria:'lotofacil'})
        sorteio.actionsLimparSorteio()
    })

    function qtdApostarLotofacil(payload){
        sorteio.actionsLimparSorteio()
        qtdeLotofacil.value = payload
    }

    function apostarLotofacil(){
        if(qtdeLotofacil.value === null){
            modalMsgLotofacil.actionsModalMsg('Selecione  a quantidade de aposta!')
            return false
        }
        sorteio.actionsSorteio({tam:25,qtde:qtdeLotofacil.value, jogo:'lotofacil'})
    }

    function salvarLotofacil(){
        salvarJogo.actionsSalvarJogo({
            nome : `lotofacil-${consultaLoterias.getersConsultaLoteria.proximoConcurso}`,
            num_sorteado : sorteio.gettersSorteio.num_sorteados
        })

        setTimeout(()=>{
            qtdeLotofacil.value = null
        },2000)
        
    }

</script>

<style scoped>

</style>