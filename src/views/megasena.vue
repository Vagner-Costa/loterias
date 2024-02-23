<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'megaSena'"></ModalMenu>
    <modalMsg v-if="modalMsgMegaSena.gettersModalMsg"></modalMsg>
    <main class="w-full h-full min-h-screen bg-branco flex flex-col justify-start 
        items-center pt-90px"
    >

        <!-- Numeros Sorteados -->
        <numeros :num_sorteados="sorteio.gettersSorteio"></numeros>
        
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
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="6"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="7"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="8"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="9"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="10"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="11"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="12"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="13"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="14"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarMegaSena" num="15"></btnQtdeApostar>
                </qtdeApostar>
                <btnSortear @apostar="apostarMegaSena"></btnSortear>

                <btnExcluirSalvar @salvar="salvarMegaSena" @cancelar="qtdApostarMegaSena"></btnExcluirSalvar>
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
    import {megaSenaParagrafo1} from '../services/textos-megaSena.js'
    import {useModalMenu} from '../store/modalMenu.js'
    import { useModalMsg } from '../store/modalMsg.js'
    import { useSorteio } from '../store/sorteio.js'
    import {useConsultaLoterias} from '../store/consultaLoterias.js'
    import { useSalvarJogo } from '../store/salvarJogo.js'
    import { provide,ref, onBeforeMount, computed } from 'vue'

    const toggleModal = useModalMenu()
    const modalMsgMegaSena = useModalMsg()
    const sorteio = useSorteio()
    const consultaLoterias = useConsultaLoterias()
    const salvarJogo = useSalvarJogo()

    const qtdeMegaSena = ref(null)   
    
    provide('cor','#00AB5C')
    provide('titulo','megaSena')
    provide('tam',60)
    provide('qtde',qtdeMegaSena)
    provide('paragrafo1',megaSenaParagrafo1)

    onBeforeMount(()=>{
        consultaLoterias.actionsConsultaLoterias({loteria:'megasena'})
        sorteio.actionsLimparSorteio()
    })

    function qtdApostarMegaSena(payload){
        sorteio.actionsLimparSorteio()
        qtdeMegaSena.value = payload
    }

    function apostarMegaSena(){
        
        if(qtdeMegaSena.value === null){
            modalMsgMegaSena.actionsModalMsg('Selecione  a quantidade de aposta!')
            setTimeout(()=>{
                modalMsgDuplaSena.actionsModalMsg(null)
            },1000)
            return false
        }
        sorteio.actionsSorteio({tam:60,qtde:qtdeMegaSena.value, jogo:'megaSena'})
    }

    function salvarMegaSena(){
        salvarJogo.actionsSalvarJogo({
            id: Date.now()+Math.round(Math.random()*99999),
            nome : `megaSena`,
            titulo : 'mega sena',
            data : new Date().toLocaleDateString(),
            hora : new Date().toLocaleTimeString(),
            concurso : consultaLoterias.getersConsultaLoteria.proximoConcurso,
            data_sorteio : consultaLoterias.getersConsultaLoteria.dataProximoConcurso,
            aposta : sorteio.gettersSorteio
            }
        )

        setTimeout(()=>{
            qtdeMegaSena.value = null
        },1000)
        
    }

</script>

<style scoped>

</style>