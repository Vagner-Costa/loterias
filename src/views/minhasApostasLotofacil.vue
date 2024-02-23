<template>
    <cabecalhoPages></cabecalhoPages>
    <ModalMenu v-if="toggleModal.gettersModalMenu === 'lotofacil'"></ModalMenu>

    <main class="w-full flex flex-col items-center pt-[100px]">

        <selecionaAposta  
            v-model:concurso="vmodel_concurso"
            @emitPesquisar="pesquisaConcurso"
        >
        </selecionaAposta>

        <numeros :num_sorteados="numeros_sorteados"></numeros>

        <section class="w-full flex flex-row flex-wrap centralizado">
            <bilhetes
                :num_concurso="num_concurso"
                loteria="lotofacil"
            >
            </bilhetes>
        </section>
    </main>
</template>

<script setup>
    import cabecalhoPages from '../components/cabecalho-pages.vue'
    import ModalMenu from '../components/modal-menu.vue'
    import selecionaAposta from '../components/selecionaAposta.vue'
    import numeros from '../components/numeros.vue'
    import bilhetes from '../components/bilhetes.vue'
    import { useModalMenu } from '../store/modalMenu.js'
    import { useConsultaLoterias } from '../store/consultaLoterias'
    import { useConsultaPorConcurso } from '../store/consultaPorConcurso.js'
    import { ref, watch, provide } from 'vue'

    const toggleModal = useModalMenu()
    const consulta = useConsultaLoterias()
    const consultaPorConcurso = useConsultaPorConcurso()

    const dados_concurso = ref()
    const vmodel_concurso = ref()
    const numeros_sorteados = ref([])
    const num_concurso = ref()

    provide('cor','#51093B')
    provide('titulo','lotofacil')

    // Chamando API que consulta loteria 
    consulta.actionsConsultaLoterias({loteria:'lotofacil'})

    watch(()=>consulta.getersConsultaLoteria, (newValue)=>{
        if(newValue){   
            // Obtendo os dados do concurso
            dados_concurso.value = consulta.getersConsultaLoteria
            // setando o valor de v-model do campo de pesquisa 
            vmodel_concurso.value = dados_concurso.value.concurso
            // Obtendo os numeros sorteados 
            numeros_sorteados.value = dados_concurso.value.dezenas
            // Obtendo numero Concurso
            num_concurso.value = dados_concurso.value.concurso
        }
    },{immediate:true})

    // setando valores de vmodel_concurso para que a pesquisa não seja menor do q 0
    // e para que a pesquisa não seja maior do que o número máximo de sorteios
    watch(vmodel_concurso,(newValue, oldValue)=>{
        if(parseInt(newValue) < 1){
            vmodel_concurso.value = '1'
        }
        if(parseInt(newValue) <= dados_concurso.value.proximoConcurso){
            vmodel_concurso.value = newValue
        }
        if(parseInt(newValue) > dados_concurso.value.proximoConcurso){
            vmodel_concurso.value = dados_concurso.value.proximoConcurso
        }
    })

    // Chamando API que realiza nova pesquisa referente ao concurso selecionado
    function pesquisaConcurso(){
        consultaPorConcurso.actionsConsultaPorConcurso({loteria:'lotofacil', concurso:vmodel_concurso.value})
        // Setando novo número de concurso
        num_concurso.value = vmodel_concurso.value
        // Limpando Consulta por concurso
        consultaPorConcurso.actionsLimparConsultaPorConcurso()
        numeros_sorteados.value = []
    }

    // Obtendo as dezenas referente ao concurso selecionado 
    watch(()=>consultaPorConcurso.gettersConsultaPorConcurso, ()=>{ 
         
        if(consultaPorConcurso.gettersConsultaPorConcurso !== null){  
            // Obtendo as dezenas sorteadas referente ao concurso selecionado 
            numeros_sorteados.value = consultaPorConcurso.gettersConsultaPorConcurso.dezenas
        }
    },{immediate:true})
</script>

<style scoped>

</style>


