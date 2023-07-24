<template>
    <div>
        
        <table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="padding: 8px; border-bottom: 1px solid #ccc;">Company Name</th>
                <th style="padding: 8px; border-bottom: 1px solid #ccc;">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(company, index) of props.companies" :key="company" style="border-bottom: 1px solid #ccc;">
                <td style="padding: 8px;">{{ company.name }}</td>
                <td style="padding: 8px;">
                    <MyButton style="margin-right: 4px;" @click="selectCompany(company)">Nuevo empleado</MyButton>
                 
                </td>
            </tr>
        </tbody>
    </table>
    <EmployesModal
      :show="showModal"
      :companie="selectedCompanie"
      @close="showModal = false"
    >
    
    </EmployesModal>
    </div>

</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex'
import {type Company } from "../types/Companies";
import EmployesModal from "../components/Employes.vue"
const store = useStore()
interface Props {
  companies: Company[];
}

const props = defineProps<Props>();
    const showModal = ref(false)
    const selectedCompanie = ref<Company>({ id: null, description: "", name: "" ,employes:[]})

const remove = (id: number|null) => {


store.dispatch('removeCompany', id);
}
const selectCompany = (companie: Company) => {

    selectedCompanie.value = companie
showModal.value = true
}
</script>
  
<style scoped></style>