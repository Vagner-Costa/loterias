<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'duplaSena'"></ModalMenu>
    <modalMsg v-if="modalMsgDuplaSena.gettersModalMsg"></modalMsg>
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
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="6"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="7"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="8"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="9"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="10"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="11"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="12"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="13"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="14"></btnQtdeApostar>
                    <btnQtdeApostar @qtdeApostar="qtdApostarDuplaSena" num="15"></btnQtdeApostar>
                </qtdeApostar>
                <btnSortear @apostar="apostarDuplasena"></btnSortear>
                
                <btnExcluirSalvar @salvar="salvarDuplaSena" @cancelar="qtdApostarDuplaSena"></btnExcluirSalvar>

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
    import {duplaSenaParagrafo1} from '../services/textos-duplasena.js'
    import {useModalMenu} from '../store/modalMenu.js'
    import { useModalMsg } from '../store/modalMsg.js'
    import { useSorteio } from '../store/sorteio.js'
    import {useConsultaLoterias} from '../store/consultaLoterias.js'
    import { useSalvarJogo } from '../store/salvarJogo.js'
    import { provide,ref, onBeforeMount } from 'vue'
 
    const toggleModal = useModalMenu()
    const modalMsgDuplaSena = useModalMsg()
    const sorteio = useSorteio()
    const consultaLoterias = useConsultaLoterias()
    const salvarJogo = useSalvarJogo()

    const qtdeDuplaSena = ref(null)

    provide('cor','#A20E28')
    provide('titulo','duplaSena')
    provide('tam',50)
    provide('qtde',qtdeDuplaSena)
    provide('paragrafo1',duplaSenaParagrafo1)
    
    onBeforeMount(()=>{
        consultaLoterias.actionsConsultaLoterias({loteria:'duplasena'})
        sorteio.actionsLimparSorteio()
    })

    function qtdApostarDuplaSena(payload){
        sorteio.actionsLimparSorteio()
        qtdeDuplaSena.value = payload
    }

    function apostarDuplasena(){
        if(qtdeDuplaSena.value === null){
            modalMsgDuplaSena.actionsModalMsg('Selecione  a quantidade de aposta!')
            setTimeout(()=>{
                modalMsgDuplaSena.actionsModalMsg(null)
            },1000)
            return false
        }
        sorteio.actionsSorteio({tam:50,qtde:qtdeDuplaSena.value, jogo:'duplaSena'})
    }

    function salvarDuplaSena(){
        salvarJogo.actionsSalvarJogo({
            id: Date.now()+Math.round(Math.random()*99999),
            nome : `duplaSena`,
            titulo : 'dupla sena',
            data : new Date().toLocaleDateString(),
            hora : new Date().toLocaleTimeString(),
            concurso : consultaLoterias.getersConsultaLoteria.proximoConcurso, 
            data_sorteio : consultaLoterias.getersConsultaLoteria.dataProximoConcurso,
            aposta : sorteio.gettersSorteio
            }
        )

        setTimeout(()=>{
            qtdeDuplaSena.value = null
        },1000)
    }

</script>

<style scoped>
    .sombra{
        box-shadow:1px 1px 10px #000;
    }
</style>