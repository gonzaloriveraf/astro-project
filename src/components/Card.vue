<script setup>
import {defineProps} from 'vue'



const props = defineProps( {
  title: String,
  body: String,
  link: String,
  updated: String,
  precio: Number,
  link: String
}
)



const dateFormatter = (date) => { 
let lastDate = new Date(date)
return lastDate.toLocaleString('es-CL', {dateStyle: 'long'})
}

const lastUpdated = dateFormatter(props.updated)



</script>
  
<template> 
<div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
  <img 
    class="object-cover object-center w-full h-56"
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    alt="avatar"
  />

  <div class="flex items-center px-3 py-2 bg-blue-950">
    <span class="mr-auto text-xs font-semibold text-white">Tipo</span>
  </div>

  <div class="px-3 py-4 flex flex-col gap-3">
    <div class="text-xs text-gray-600">Actualizado el: {{lastUpdated}}</div>

    <h3 class="text-xl font-bold text-gray-800 h-12">{{props.title}}</h3>

    <div class="text-gray-700 text-sm ">{{props.body}}</div>

    <div class="flex items-center text-gray-700">
      <span class="text-sm">California</span>
    </div>

    <div class="flex items-center  text-gray-700 dark:text-gray-200">       <strong class="text-lg font-bold text-left">{{props.precio}}</strong></div>
    <div class="flex items-center  text-gray-700 dark:text-gray-200">


      <a   :href="props.link"
        class="px-3 py-2 ml-auto text-white bg-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Ver más</a>
    </div>
  </div>
</div>

</template>