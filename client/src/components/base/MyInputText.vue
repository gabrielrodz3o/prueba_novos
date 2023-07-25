<!-- MyInputText.vue -->
<template>
    <input type="text" class="input" :placeholder="props.placeholder" :value="modelValue" @input="handleInput" />
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const props = withDefaults(defineProps<{
    placeholder?: string;
}>(), {
    placeholder: "Ingresa texto aquí",
});

const modelValue = ref('');
</script>
  
<style>
/* Styles for the input... */
</style>
  