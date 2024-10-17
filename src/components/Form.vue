<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

const name = ref('');
const email = ref('');
const publicApi = import.meta.env.PUBLIC_API_URL;


const formData = reactive({
  data: {
    clienteNombre: "Pepito",
    clienteApellido: "Wedsa",
  },
});


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


      <button @click ='handleSubmit' type="button">Submit</button>
 
  </template>
  
