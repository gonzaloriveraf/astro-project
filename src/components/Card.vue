<script setup>
import {defineProps} from 'vue'



const props = defineProps( {
  title: String,
  body: String,
  link: String,
  updated: String,
  precio: Number,
  tipo: String, 
  ubicacion: String, 
  imagen: String,
  link: String
}
)





</script>
  
<template> 
<div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
  <img 
    class="object-cover object-center w-full h-56"
    :src="props.imagen"
    alt="avatar"
  />

  <div class="flex items-center px-3 py-2 bg-blue-950">
    <svg width="16px" height="16px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFF"><path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#FFF" stroke-width="1.5"></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#FFF" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>    <span class="ml-2 mr-auto text-xs font-regular text-white ">{{props.ubicacion}}</span>
  </div>

  <div class="px-3 py-4 flex flex-col gap-4">
   <div class="gap-1 flex flex-col"> <div class="text-xs text-gray-600 flex  capitalize"> {{ props.tipo }}</div>
    <h3 class="text-xl font-bold text-gray-800 h-12">{{props.title}}</h3></div>
    <div class="text-gray-700 text-sm ">{{props.body}}</div>
    <div class="flex items-center  text-gray-700 dark:text-gray-200">     
    <div class="flex items-center  text-gray-700 dark:text-gray-200">
      <h4 class="text-lg font-black text-left">{{props.precio}}</h4></div>

      <a   :href="props.link"
        class="px-4 py-2 ml-auto font-semibold text-blue-900 bg-blue-50 transition-colors duration-300 transform rounded-full  hover:bg-gray-100 ">Ver más</a>
    </div>
  </div>
</div>

</template>