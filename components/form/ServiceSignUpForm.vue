<template>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
  
      <label for="telephone">Telephone:</label>
      <input type="tel" id="telephone" v-model="telephone" required />
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const telephone = ref('')
  
  async function submitForm() {
    try {
      const response = await $fetch('/api/telegram', {
        method: 'POST',
        body: { name: name.value, telephone: telephone.value }
      })
  
      if (response.success) {
        alert('Form submitted successfully!')
        name.value = ''
        telephone.value = ''
      } else {
        alert('Error submitting form')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while submitting the form')
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here */
  </style>
  