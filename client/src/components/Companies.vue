<script lang="ts" setup>
import { useStore } from 'vuex'
import { type Company } from '@/types/Companies';
import { getCompanies, addCompanies } from '../composables/companies';
import { ref } from 'vue';
const store = useStore()
interface Emits {
    (e: "close"): void;

}
const emits = defineEmits<Emits>()
const props = defineProps({
    show: Boolean,
    companie: Object as () => Company,
})
const showError=ref(false)
const add = async () => {
    if(props.companie?.name==='')
    {
        showError.value=true 
            setTimeout(() => {
                showError.value=false 
            }, 3000);
        return
    }
    var formData = {
        name: props.companie?.name,
        description: '.',
    }

    const response = await addCompanies(formData)

    if (response.status === 201) {
        const companies = await getCompanies()

        store.dispatch('setCompanies', companies);
    }
    emits('close')
}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">Agregar compañía</slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        
                        <input type="text" v-model="props.companie.name" placeholder="name" name="branch">
                        <br>
                        <div v-if="showError" >
                       <span style="color: red;">Debes agregar un nombre </span>     
                        </div>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">



                        <MyButton @click=" add()">Guardar</MyButton>
                        <MyButton @click="$emit('close')">Cerrar</MyButton>

                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style></style>