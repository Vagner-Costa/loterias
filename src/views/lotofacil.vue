<template>
    <CabecalhoPages></CabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'lotofacil'"></ModalMenu>
    <modalMsg v-if="modalMsgLotofacil.gettersModalMsg"></modalMsg>
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
                <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="15"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="16"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="17"></btnQtdeApostar>
                <btnQtdeApostar @qtdeApostar="qtdApostarLotofacil" num="18"></btnQtdeApostar>
            </qtdeApostar>
            <btnSortear @apostar="apostarLotofacil"></btnSortear>
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
    import { provide, ref, onBeforeMount } from 'vue'

    const toggleModal = useModalMenu()
    const modalMsgLotofacil = useModalMsg()
    const sorteio = useSorteio()
    const qtdeLotofacil = ref(null)

    provide('cor','#51093B')
    provide('titulo','lotofacil')
    provide('tam',25)
    provide('qtde',qtdeLotofacil)

    onBeforeMount(()=>{
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

</script>

<style scoped>

</style>