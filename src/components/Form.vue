<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

const name = ref('');
const email = ref('');
const publicApi = import.meta.env.PUBLIC_API_URL;
const isFormOpen = ref(false)

const formData = reactive({
  data: {
    clienteNombre: "",
    clienteApellido: "",
  },
});

const toggleForm = () => {
  isFormOpen.value = !isFormOpen.value;
};

const handleSubmit = async () => {

console.log(formData);
console.log("API URL:", publicApi);
  try {
    const response = await fetch(publicApi+"/api/solicitudes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<template>
<div  class="flex flex-col gap-4 rounded-lg p-8 bg-gray-100 "> 
  
  
  <button  v-if="!isFormOpen" class="w-full px-4 py-2 ml-auto font-semibold bg-blue-950 text-white transition-colors duration-300 transform rounded-full"@click ="toggleForm" type="button">Ssolicitar información</button>

 
<div v-if="isFormOpen" class="flex gap-4 flex-col">
  
  <h3 class="text-lg font-semibold"> Solicita información o una visita:</h3>
  
  <label> Ingresa tu nombre
<input placeholder="Ingresa el nombre" class="w-full border rounded-xl p-2 mt-1 border-gray-300"type="text" v-model ="formData.data.clienteNombre"  />
</label>
<label>Ingresa tu apellido
<input placeholder="Ingresa el nombre" class="w-full border rounded-xl p-2 mt-1 border-gray-300"type="text" v-model ="formData.data.clienteApellido"  />
</label>

<label>Ingresa tu Correo electrónico
<input placeholder="Ingresa el nombre" class="w-full border rounded-xl p-2 mt-1 border-gray-300"type="text" v-model ="clienteCorreo"  />
</label>
      <button  class="w-full px-4 py-2 ml-auto font-semibold bg-blue-950 text-white transition-colors duration-300 transform rounded-full"@click ='handleSubmit' type="button">Enviar</button>
    </div>
  </div>
  </template>
  
