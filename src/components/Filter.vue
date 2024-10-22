<script setup>
import { ref } from "vue";

const emit = defineEmits();
const filterValue = ref("");
const filterType = ref("");
const filterLocation = ref("");
const filterName = ref("");

// Función para aplicar el filtro
const applyFilter = () => {
  filterValue.value; // Asignar el valor del filtro (puede ser dinámico si hay más opciones)
  emit(
    "filterChanged",
    ( "&filters[tipo][$contains]=" + filterType.value + '&filters[ubicacion][$contains]='+ filterLocation.value  + '&filters[nombre][$contains]='+ filterName.value )
  );
};

const resetFilter = () => {
  filterType.value = "";
  filterLocation.value = ""
  filterName.value = "";
};


</script>

<template>
  <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg border border-gray-300 p-4 flex flex-col gap-8">
    <div><h2 class="text-lg font-bold">Filtros</h2>
  </div>

<div class="flex flex-col gap-2 pb-4  border-b-gray-300">
  <h3 class="font-semibold">Buscar por nombre: </h3>
<input placeholder="Ingresa el nombre" class="w-full border rounded-xl p-2 mt-1 border-gray-300"type="text" v-model ="filterName"  />

</div>

<div class=" flex flex-col gap-2">
  <h3 class="font-semibold">Tipo de propiedad: </h3>
    <label>
      <input type="radio" value="departamento" v-model="filterType"/>
      Departamentos
    </label>
<label> 
    <input type="radio" value="casa" v-model="filterType" /> Casas </input>
  </label>
 
</div>


<div class="flex flex-col gap-2">    
<h3 class="font-semibold">Ubicación:</h3>

<select placeholder="Selecciona una región"  v-model="filterLocation"  class="w-full border rounded-xl p-2 mt-1 border-gray-300">
<option value="" disabled selected>Selecciona una Región</option>
<option value="Coquimbo">Región de Coquimbo </option>
<option value="Valparaíso">Región de Valparaíso</option>
<option value="Metropolitana">Región Metropolitana </option>
<option value="O'Higgins">Región de O'Higgins </option>

</select>

</div>
<div class="flex flex-col gap-2">   
    <button
      class="w-full px-4 py-2 ml-auto font-semibold bg-blue-950 text-white transition-colors duration-300 transform rounded-full"
      @click="applyFilter"
    >
      Aplicar
    </button>
    <button
      class="w-full px-4 py-2 ml-auto font-semibold text-blue-950 bg-white transition-colors duration-300 transform rounded-full  hover:bg-gray-100"
      type="button"
      @click="
        resetFilter();
        applyFilter();
      "
    >
      Borrar Filtros
    </button>
    </div>
  </div>
</template>
