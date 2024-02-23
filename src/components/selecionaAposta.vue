<template>
    <div class="w-full flex flex-col centralizado mb-10px md:flex-row">
        <label class="font-titulo text-[28px] text-[#888] italic">SELECIONE O CONCURSO:</label>
        <div class="w-full max-w-[350px] h-40px flex flex-row centralizado px-10px">
            <input class="w-[80%] h-full border border-[#888] outline-none bg-branco
                rounded-s-[20px] px-10px text-[#666]" 
                v-model="concurso"
                pattern="[0-9]{4}"
                maxlength="4"
                type="text" 
            >
            <button class="w-[20%] h-full p-[7px] cursor-pointer rounded-e-[20px] flex centralizado"
                @click="pesquisar"
                :style="{backgroundColor:cor}"
            >
                <img class="w-30px h-30px"
                    src="../assets/lupa.png" alt="lupa"
                />
            </button>
        </div>
    </div>
</template>

<script setup>
    import { inject, defineEmits, ref,  } from 'vue'

    const concurso = defineModel('concurso')
    const emit = defineEmits(['emitPesquisar'])

    const cor = inject('cor')

    const input_num_concurso = ref()

    function pesquisar(){
        emit('emitPesquisar')
    }

</script>

<style scoped>
    .sombra{
        box-shadow:2px 2px 10px #000
    }
    @keyframes rodar{
        0% { transform:rotate(0deg)}
        100% { transform:rotate(360deg)}
    }
    .animacao_bolas{
        animation-name:rodar;
        animation-duration: 1s;
        animation-timing-function: linear;
    }

</style>