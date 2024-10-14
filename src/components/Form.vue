<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

const name = ref('');
const email = ref('');

const formData = reactive({
  data: {
    clienteNombre: "Pepito",
    clienteApellido: "Wedsa",
  },
});


const handleSubmit = async () => {

    console.log('Product data saved:');

  try {
    const response = await fetch("http://localhost:1337/api/solicitudes", {
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

   
      <!-- Puedes agregar más campos si lo necesitas -->
      <button @click ='handleSubmit' type="submit">Submit</button>
 
  </template>
  
