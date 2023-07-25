<script lang="ts" setup>
import {  ref,  onMounted } from 'vue';
import { useStore } from 'vuex'
import { VueDraggableNext } from 'vue-draggable-next'
import { getCompanies, getCompaniesById } from "../composables/companies"

import { type Employe } from '../types/Companies';
const store = useStore()
const employees = ref<Employe[]>([])
const loading = ref<boolean>(false)
onMounted(async () => {

  loading.value = true
  const companies = await getCompanies()

  store.dispatch('setCompanies', companies);
  loading.value = false
})
const edit = async (id:number) => {

  employees.value = []
  loading.value = true

  const data = await getCompaniesById(id)
  employees.value = data.data

  loading.value = false
}
</script>

<template>
  <div style="text-align: center">
    <h1>Compañías</h1>
    <div style="margin-top: 10px">
        <my-auto-complete
          @selectedCompany="edit"
          :companies="store.getters.getCompanies"
        />
      </div>
    <div v-if="!loading">
    

      <div v-if="employees.length > 0">
        <div style="margin-top: 10px;margin-bottom: 10px;font-size: 20px;">Empleados</div>
        <VueDraggableNext :list="employees">
          <div class="draggable-item" v-for="element in employees" :key="element.id">
            {{ element.name }}
          </div>
        </VueDraggableNext>
      </div>
      <div v-else style="margin-top: 50px">No hay empleados</div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
<style>
.draggable-item {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: move;
}

.draggable-item.dragging {
  opacity: 0.6;
  border: 1px dashed #aaa;
}
</style>
