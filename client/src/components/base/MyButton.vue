
<template>
    <button class="button">
        <slot></slot>
    </button>
</template>
  
<style scoped>
.button {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

/* Estilo para cuando el botón es presionado */
.button:active {
    background-color: #2980b9;
}

/* Estilo para cuando el botón está deshabilitado */
.button[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>