<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'quina'"></ModalMenu>
    <modalMsg v-if="modalMsgQuina.gettersModalMsg"></modalMsg>
    <main class="w-full h-full min-h-screen bg-branco flex flex-col justify-start items-center">

        <numeros></numeros>
        
        <!-- Volante -->
        <div class="w-full max-w-[500px] p-5px border border-[#ddd]">
            <cabecalhoJogo></cabecalhoJogo>
            <tracosHoriz></tracosHoriz>
            <div class="w-full flex flex-row relative ">
                <tracosVert></tracosVert>
                <areaJogo></areaJogo>
            </div>
            <qtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="5"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="6"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="7"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="8"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="9"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="10"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="11"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="12"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="13"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="14"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarQuina" num="15"></btnQtdeApostar>
            </qtdeApostar>
            <btnSortear @apostar="apostarQuina"></btnSortear>
        </div>
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
    import {useModalMenu} from '../store/modalMenu.js'
    import { useModalMsg } from '../store/modalMsg'
    import { useSorteio } from '../store/sorteio.js'
    import { provide,ref, onBeforeMount } from 'vue'

    const toggleModal = useModalMenu()
    const modalMsgQuina = useModalMsg()
    const sorteio = useSorteio()
    const qtdeQuina = ref(null)

    provide('cor','#1C1C50')
    provide('titulo','quina')
    provide('tam',80)
    provide('qtde',qtdeQuina)

    onBeforeMount(()=>{
        sorteio.actionsLimparSorteio()
    })

    function qtdApostarQuina(payload){
        sorteio.actionsLimparSorteio()
        qtdeQuina.value = payload
    }

    function apostarQuina(){
        if(qtdeQuina.value === null){
            modalMsgQuina.actionsModalMsg('Selecione  a quantidade de aposta!')
            return false
        }
        sorteio.actionsSorteio({tam:80,qtde:qtdeQuina.value, jogo:'quina'})
    }

</script>

<style scoped>

</style>