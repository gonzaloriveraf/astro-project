<script setup>
import Layout from "../layouts/Layout.astro";
import Card from "../components/Card.vue";
import Filter from '../components/Filter.vue'
import Spinner from '../components/Spinner.vue'
import {ref,  onMounted} from 'vue'

import "../styles/global.css";


const publicApi = import.meta.env.PUBLIC_API_URL;
const query = ref('') 
const dataList = ref([])

async function fetchData(query='') {
  try {
    const response = await fetch(publicApi + "/api/propiedades?populate=imagen" + query );
    console.log(publicApi + "/api/propiedades" + query )
    const data = await response.json();
    console.log(data.data)
    dataList.value = data.data;
    console.log('Data List actualizado:', dataList.value); 
    console.log('Longitud de dataList:', dataList.value.length);
    console.log('Primer elemento de dataList:', dataList.value[0]);
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


 
const currencyFormatter = (number) => { 
  
  return number.toLocaleString('es-CL', {
  style: 'currency',
  currency: 'CLP'
})};


// Función para manejar el evento del filtro
const handleFilterChange = async (filterValue) => {
  console.log(`Filtro aplicado: ${filterValue}`);
  await fetchData(filterValue);
};

onMounted(() => {
  fetchData()
});

</script>

<template>
 
  <div id="propiedades"  class="flex container mx-auto  h-100  items-center  gap-4 w-11/12 ">
    <h2 class="text-left text-4xl my-8 font-semibold w-11/12" > Propiedades disponibles </h2>
</div>
  <section class="flex container mx-auto  justify-start align-start  items-start w-11/12" >


    <div class="w-1/6">
      
       <Filter @filterChanged="handleFilterChange" client:load /> 
       
      </div>
      <Spinner v-if="dataList.length == 0" client:load />


    <div v-else   class="grid grid-cols-4 gap-4 w-5/6 mx-auto px-10">
 
 
        <Card 
        v-for="(element, index) in dataList"
        :key="index"
        :title="element.attributes.nombre"
        :precio="currencyFormatter(element.attributes.precio)"
        :body="element.attributes.descripcion"
        :link="'propiedades/' + element.id"
        :tipo = "element.attributes.tipo"
        :ubicacion = "element.attributes.ubicacion"
        :imagen = "element.attributes.imagen.data.attributes.formats.small.url"
        :updated="element.attributes.updatedAt"
      />
    </div>
  </section>


</template>