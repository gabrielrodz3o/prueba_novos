<template>
  <div style="text-align: center">
    <h1>Compañías</h1>
  
    <button class="button" @click="showModal = true">Agregar compañía</button>
    <div style="margin-top: 10px">
        
      <ListCompanies :companies="paginatedCompanies" />
    
        <PaginationNumber
          :current-page="store.getters.getCurrentPage"
          :total-pages="totalPages"
          @page-changed="getPage"
        />
    
    </div>

    <CompaniesModal
      :show="showModal"
      :companie="selectedCompanie"
      @close="showModal = false"
    >
      <template #header>
        <h3 style="text-align: center">Agregar compañía</h3>
      </template>
    </CompaniesModal>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import CompaniesModal from "../components/Companies.vue"
import PaginationNumber from "../components/base/PaginationNumber.vue"
import ListCompanies from "../components/ListCompanies.vue"
import { type Company } from '../types/Companies';

const store = useStore()

const companies = computed(() => store.getters.getCompanies)
const perPage = 5;
const totalPages = computed(() => Math.ceil(companies.value.length / perPage));

const paginatedCompanies = computed(() => {
    const startIndex = (store.getters.getCurrentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return companies.value.slice(startIndex, endIndex);
});

const showModal = ref(false)
const selectedCompanie = ref<Company>({ id: null, description: "", name: "" ,employes:[]})

const getPage = (id: number) => {
    store.dispatch('setPage', id);
}
</script>

<style lang="scss" scoped>
input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul.suggestions {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
}

ul.suggestions li {
  padding: 8px;
  cursor: pointer;
  background-color: #f9f9f9;
}

ul.suggestions li:hover {
  background-color: #e5e5e5;
}
</style>
