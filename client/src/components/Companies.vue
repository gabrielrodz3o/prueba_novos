
<script lang="ts" setup>
import { useStore } from 'vuex'
import { type Company } from '@/types/Companies';
import { getCompanies, addCompanies } from '../composables/companies';
const store = useStore()
const props = defineProps({
    show: Boolean,
    companie: Object as () => Company,
})
const add = async () => {
    
    var formData = {
        name: props.companie?.name,
        description: '.',
    }
  
    const response = await addCompanies(formData)

    if (response.status===201) {
        const companies = await getCompanies()

        store.dispatch('setCompanies', companies);
    }
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
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">



                        <MyButton @click="$emit('close'), add()">Guardar</MyButton>
                        <MyButton @click="$emit('close')">Cerrar</MyButton>

                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style></style>