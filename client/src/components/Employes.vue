
<script lang="ts" setup>
import { useStore } from 'vuex'
import type {  Company } from '@/types/Companies';
import { ref } from 'vue';
import {type Employe } from '../types/Companies';
import { addEmploye } from '@/composables/companies';
const store = useStore()
const props = defineProps({
    show: Boolean,
    companie: Object as () => Company,
})
interface Emits {
    (e: "close"): void;

}
const emits = defineEmits<Emits>()
    const showError=ref(false)
const add = async() => {
    if(employe.value.name==='')
    {
        showError.value=true 
            setTimeout(() => {
                showError.value=false 
            }, 3000);
        return
    }
    employe.value.id = props.companie?.employes?.length ?? 0 + 1;

   
    var data={
        company_id:props.companie?.id,
        ...employe.value 
    }
    const response=await addEmploye(data)
    if(response)
    {
        emits('close')
        employe.value.name=''
        employe.value.address=''
        employe.value.dni=''
        employe.value.phone=''
        employe.value.salary=0
    }
  
}

const employe = ref<Employe>({address:"",dni:"",email:"",id:null,name:"",phone:"",salary:0,} )
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-header">
                    
                    <slot name="header">Agregar empleado</slot>
                </div>

                <div class="modal-body" >
                  
                    <!-- <slot name="body"> <input type="text" v-model="props.companie.name" placeholder="name" name="branch">
                    </slot> -->
                    <input type="text" class="input spacing" placeholder="Nombre empleado" v-model="employe.name" />
                    <input type="text" class="input spacing" placeholder="Cedula" v-model="employe.dni" />
                    <input type="text" class="input spacing" placeholder="Direccion" v-model="employe.address" />
                    <input type="text" class="input spacing" placeholder="Telefono" v-model="employe.phone" />
                    <input type="text" class="input spacing" placeholder="Correo" v-model="employe.email" />
                    <input type="text" class="input spacing" placeholder="Salario" v-model="employe.salary" />
                </div>
                <div v-if="showError" >
                       <span style="color: red;">Debes agregar un nombre </span>     
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

<style>
.spacing{
    margin-bottom: 4px;
}
</style>