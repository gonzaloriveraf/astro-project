<script setup>
import {ref } from 'vue'

const emit = defineEmits();
const filterValue = ref('');

// Función para aplicar el filtro
const applyFilter = () => {
  filterValue.value = '?filters[nombre][$contains]=Departamento'; // Asignar el valor del filtro (puede ser dinámico si hay más opciones)
  emit('filterChanged', filterValue.value);
};
</script>

<template>
  <div>
    <button @click="applyFilter">Departamento</button>
  </div>
</template>