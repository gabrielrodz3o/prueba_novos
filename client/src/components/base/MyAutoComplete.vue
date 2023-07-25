<template>
     
   <div class="autocomplete-container">

    <input
      ref="input"
      type="text"
      v-model="inputValue.name"
      @input="onInput"
    />

    <ul v-if="showSuggestions" class="suggestions">
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        @click="onSuggestionClick(suggestion)"
      >
        {{ suggestion.name }}
      </li>
    </ul>
  </div>
</template>
  
<script lang="ts" setup>
import { ref ,onMounted} from "vue";
import { useStore } from 'vuex'
import { type Company } from "../../types/Companies";

const store = useStore()

const props = defineProps<{
    companies: Company[];
  
}>();

const suggestions = ref<Company[]>(props.companies);
const filteredSuggestions = ref<Company[]>([]);
const inputValue = ref({id:0,name:""})
const showSuggestions = ref<boolean>(false);

const onInput = () => {
  filterSuggestions();
  showSuggestions.value = true;
};

const filterSuggestions = () => {

  filteredSuggestions.value = suggestions.value.filter((item) =>
    item.name.toLowerCase().includes(inputValue.value.name)
  );
};

const onSuggestionClick = (suggestion: Company) => {
    
    store.dispatch('selectCompany',suggestion);
    inputValue.value=suggestion
 //  store.state.companies.selectedCompany = suggestion;
  showSuggestions.value = false;
};

onMounted(() => {
    document.addEventListener("click", (event) => {
        const autocomplete = document.getElementById("autocomplete");

        if (autocomplete && !autocomplete.contains(event.target as Node)) {
            showSuggestions.value = false;
        }
    });
});


</script>
<style>
/* Estilo del componente */
.autocomplete-container {
  position: relative;
  display: inline-block;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

ul.suggestions {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
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