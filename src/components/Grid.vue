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

<Spinner v-if="dataList.length == 0" client:load />
  <section class="flex container " v-else>

    
    <div class="w-1/6">
       <Filter @filterChanged="handleFilterChange" client:load /> 
      </div>
    <div class="grid grid-cols-4 gap-4 w-5/6 mx-auto px-10">
 



        <Card  
        v-for="(element, index) in dataList"
        :key="index"
        :title="element.attributes.nombre"
        :precio="element.attributes.precio"
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