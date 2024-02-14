<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'duplaSena'"></ModalMenu>
    <modalMsg v-if="modalMsgDuplaSena.gettersModalMsg"></modalMsg>
    <main class="w-full h-full min-h-screen bg-branco flex centralizado">
        <div class="w-full max-w-[450px] p-5px border">
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
    import {useModalMenu} from '../store/modalMenu.js'
    import { useModalMsg } from '../store/modalMsg.js'
    import { provide,ref } from 'vue'

    const toggleModal = useModalMenu()
    const modalMsgDuplaSena = useModalMsg()
    const qtdeDuplaSena = ref(null)
    const sorteadosDuplaSena = ref([])

    provide('cor','#A20E28')
    provide('titulo','duplaSena')
    provide('tam',50)
    provide('qtde',qtdeDuplaSena)

    function qtdApostarDuplaSena(payload){
        qtdeDuplaSena.value = payload
    }

    function apostarDuplasena(){
        if(qtdeDuplaSena.value === null){
            modalMsgDuplaSena.actionsModalMsg('Selecione  a quantidade de aposta!')
            return false
        }else{
            alert('prossiga')
        }


    }

</script>

<style scoped>

</style>