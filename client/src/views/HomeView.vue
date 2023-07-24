<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex'
import { VueDraggableNext } from 'vue-draggable-next'


import { type Employe, type Company } from '../types/Companies';
const store = useStore()
const employees = ref<Employe[]>([])

const edit=()=>{
  employees.value=[]
  const data = store.getters.getCompanies.filter(company => company.id === store.getters.getSelectedCompany.id)

  if(data.length>0)
  {

    employees.value = data[0].employes
  }

}
</script>

<template>
  <div style="text-align: center">
    <h1>Compañías</h1>

    <div style="margin-top: 10px">
      <my-auto-complete @change="edit" :companies="store.getters.getCompanies" />
    </div>

    <div v-if="employees.length > 0">
      <VueDraggableNext :list="employees">
        <div class="draggable-item" v-for="element in employees" :key="element.id">
          {{ element.name }}
        </div>
      </VueDraggableNext>
    </div>
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
