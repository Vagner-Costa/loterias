<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'duplaSena'"></ModalMenu>
    <modalMsg v-if="modalMsgDuplaSena.gettersModalMsg"></modalMsg>
    <main class="w-full h-full min-h-screen bg-branco flex flex-col justify-start items-center">

        <numeros></numeros>
        
        <!-- Volante -->
        <div class="w-full max-w-[500px] p-5px border border-[#ccc]">
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
    const modalMsgDuplaSena = useModalMsg()
    const sorteio = useSorteio()
    const qtdeDuplaSena = ref(null)

    provide('cor','#A20E28')
    provide('titulo','duplaSena')
    provide('tam',50)
    provide('qtde',qtdeDuplaSena)

    onBeforeMount(()=>{
        sorteio.actionsLimparSorteio()
    })

    function qtdApostarDuplaSena(payload){
        sorteio.actionsLimparSorteio()
        qtdeDuplaSena.value = payload
    }

    function apostarDuplasena(){
        if(qtdeDuplaSena.value === null){
            modalMsgDuplaSena.actionsModalMsg('Selecione  a quantidade de aposta!')
            return false
        }
        sorteio.actionsSorteio({tam:50,qtde:qtdeDuplaSena.value, jogo:'duplaSena'})
    }

</script>

<style scoped>
    .sombra{
        box-shadow:1px 1px 10px #000;
    }
</style>