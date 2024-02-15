<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'megaSena'"></ModalMenu>
    <modalMsg v-if="modalMsgMegaSena.gettersModalMsg"></modalMsg>
    <main class="w-full h-full min-h-screen bg-branco flex flex-col justify-start items-center">

        <numeros></numeros>
        
        <!-- Volante -->
        <div class="w-full max-w-[500px] p-5px border border-[#ddd]">
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
    import { useModalMsg } from '../store/modalMsg.js'
    import { useSorteio } from '../store/sorteio.js'
    import { provide,ref, onBeforeMount } from 'vue'


    const toggleModal = useModalMenu()
    const modalMsgMegaSena = useModalMsg()
    const sorteio = useSorteio()
    const qtdeMegaSena = ref(null)

    provide('cor','#00AB5C')
    provide('titulo','megaSena')
    provide('tam',60)
    provide('qtde',qtdeMegaSena)

    onBeforeMount(()=>{
        sorteio.actionsLimparSorteio()
    })

    function qtdApostarMegaSena(payload){
        sorteio.actionsLimparSorteio()
        qtdeMegaSena.value = payload
    }

    function apostarMegaSena(){
        if(qtdeMegaSena.value === null){
            modalMsgMegaSena.actionsModalMsg('Selecione  a quantidade de aposta!')
            return false
        }
        sorteio.actionsSorteio({tam:60,qtde:qtdeMegaSena.value, jogo:'megaSena'})
    }

</script>

<style scoped>

</style>