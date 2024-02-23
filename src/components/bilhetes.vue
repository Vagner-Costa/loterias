<template>
    <template v-if="cptdArrayApostas.length > 0">
        <div class="w-full max-w-[1200px] flex flex-wrap px-10px mb-20px">
            <p class="text-[22px] text-[#888] text-center" translate="no">
                Os bilhetes abaixo relacionados são meramente ilustrativos,
                não tendo nenhum lastro de veracidade, sendo válido apenas para conferência 
                da simulação das suas eventuais apostas.  Sendo assim os mesmos não possuem
                nenhum valor como comprovante de apostas da CAIXA ECONÔMICA FEDERAL.
            </p>
        </div>
        <article class="w-full flex flex-row flex-wrap centralizado">
            <div  v-for="aposta,index in cptdArrayApostas" :key="index"
                class="w-full max-w-[480px] h-[580px] border border-[#ccc] flex flex-row 
                justify-between mx-0px my-10px overflow-hidden py-10px md:my-10px md:mx-10px"
            >
                <div class="w-40px min-w-40px h-full flex flex-col items-center">
                    <lateralEsqResultados></lateralEsqResultados>
                    <lateralEsqResultados></lateralEsqResultados>
                    <lateralEsqResultados></lateralEsqResultados>
                </div>

                <div class="w-full h-full flex flex-col px-5px justify-end relative">
                    <button @click="deletarAposta(aposta.id)"
                        class="w-35px h-35px rounded-full bg-vermelho absolute right-10px 
                        top-10px p-7px border border-branco hover:border-vermelho"
                    >
                        <img src="../assets/lixo.png" alt="img">
                    </button>

                    <div class="w-full flex flex-row centralizado">
                        <img class="w-40px h-40px mr-10px rotate-45"
                            src="../assets/trevo-preto.png" alt="trevo"
                        >
                        <p class="font-titulo text-[35px] ">{{ aposta.titulo }}</p>
                    </div>

                    <p class="w-full text-18px text-center my-10px" translate="no">
                        Loterias CAIXA. Acredite e vem! Aposte!
                    </p>
                    
                    <div class="w-full flex flex-row justify-between">
                        <p class="text-18px font-semibold" translate="no">
                            {{ aposta.data }}
                        </p>
                        <p class="text-18px font-semibold" translate="no">
                            HORA DF <label class="font-normal">{{ aposta.hora }}</label>
                        </p>
                    </div>
                    
                    <div class="w-full flex flex-row flex-wrap border-y border-x-none border-dashed py-10px my-20px justify-start items-center relative">
                        <p class="text-[25px] font-medium mx-7px" 
                            v-for="nums,index in aposta.aposta.sort()" :key="index" 
                        >
                            {{ nums }}
                        </p>
                        
                    </div>
                    
                    <div class="w-full flex flex-row justify-between">
                        <p class="text-18px font-semibold" translate="no">
                            <label class="mr-10px">CONC</label>{{ aposta.concurso }}
                        </p>
                        <p class="text-18px" translate="no">
                            {{ aposta.data_sorteio }}
                        </p>
                    </div>
                    
                    <div class="w-full flex centralizado my-10px">
                        {{ Math.round(Math.random()*999999999999999) }}
                    </div>                  
                    
                    <div class="w-full flex centralizado">
                        <img class="w-[150px] h-[150px]" src="../assets/qrcode.png" alt="">
                    </div>                   
                </div>

                <div class="w-40px min-w-40px h-full flex flex-col items-center">
                    <lateralDirResultados></lateralDirResultados>
                    <lateralDirResultados></lateralDirResultados>
                    <lateralDirResultados></lateralDirResultados>
                </div>
            </div>
        </article>
    </template>
    <div v-else
        class="w-full flex flex-wrap centralizado px-10px mt-80px"
    >
        <p class="text-[22px] text-[#888] text-center">Você não possui nenhuma simulação de aposta para esse concurso!</p>
    </div>
</template>

<script setup>
    import lateralDirResultados from "./lateralDirResultados.vue"
    import lateralEsqResultados from "./lateralEsqResultados.vue"
    import { ref, computed, onBeforeMount,watch } from 'vue'

    const minhas_apostas = ref([])
    const array_apostas = ref([])

    const props = defineProps(['num_concurso','loteria'])

    onBeforeMount(()=>{
        minhas_apostas.value = JSON.parse(localStorage.getItem(props.loteria))
    })

    // Listando apostas correspondentes ao número do concurso
    watch(()=>props.num_concurso,()=>{
        array_apostas.value = minhas_apostas.value.filter(e =>{
            if(parseInt(e.concurso) === parseInt(props.num_concurso)){
                return e
            } 
        })
    })

    function deletarAposta(id){
        minhas_apostas.value = minhas_apostas.value.filter(e=>{
            if(e.id !== id){
                return e
            }
        })
        array_apostas.value = minhas_apostas.value.filter(e =>{
            if(parseInt(e.concurso) === parseInt(props.num_concurso)){
                return e
            } 
        })
        localStorage.setItem(`${props.loteria}`,JSON.stringify(minhas_apostas.value))
    }

    const cptdArrayApostas = computed(()=>{
        return array_apostas.value
    })
</script>

<style  scoped>

</style>