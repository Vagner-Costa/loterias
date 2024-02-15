<template>
    <div class="w-[90%] bg-amarelo p-10px grid centralizado
        gap-1 right-0 md:w-[93%]"
        :class="titulo === 'lotofacil' ? ['grid-cols-5'] : ['grid-cols-10']"
    >
        <div v-for="num,index_n in cptdNumeros " :key="index_n"
            class=" border-x border-x-vermelho  
            text-center rounded-[5px]"
            :class="num.background === 'azul' ? ['bg-azul'] : ['bg-branco']"
        >
            <p class="text-16px"
                :class="num.background === 'azul' ? ['text-branco'] : ['text-vermelho']"
            >
                {{ num.numero < 10  ? '0' + num.numero : num.numero }}
            </p>
        </div> 
    </div>
</template>

<script setup>  
    import { useSorteio } from '../store/sorteio'
    import { inject,computed, ref, onMounted, watch} from 'vue'

    const sorteados = useSorteio()

    const tam = inject('tam')
    const titulo = inject('titulo')

    const num_trabalhado = ref([])

    onMounted(()=>{
        numeros()
    })

    watch(()=>sorteados.gettersSorteio.num_sorteados,()=>{
        numeros()
    },{immediate:true})

    function numeros(){
        num_trabalhado.value = []
        for(let i = 1; i< (tam+1 ); i++){
            for(let s = 0; s < sorteados.gettersSorteio.num_sorteados.length ;s++ ){
                if(i == sorteados.gettersSorteio.num_sorteados[s]){
                    num_trabalhado.value.push({numero:i, background: 'azul'})
                }
            }
            const pesq = num_trabalhado.value.find(n => n.numero === i)
            if(pesq === undefined){
                num_trabalhado.value.push({numero:i, background: 'branco'})
            }
        }
    }

    const cptdNumeros = computed(()=>{
        return num_trabalhado.value
    })

</script>

<style scoped>

</style>