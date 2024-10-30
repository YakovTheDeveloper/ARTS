<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="form-item">
      <label for="name">Имя <span class="label-description">(необяз.)</span></label>
      <input type="text" id="name" v-model="name" />
    </div>

    <div class="form-item">
      <label for="question">Если есть вопросы <span class="label-description">(необяз.)</span></label>
      <input type="text" id="question" v-model="question" />
    </div>

    <div class="form-item">
      <label for="telephone">Телефон для связи</label>
      <input type="tel" id="telephone" v-model="telephone" @input="formatPhoneNumber" required
        placeholder="Номер телефона" />
    </div>

    <div class="form-item">
      <label>Предпочтительный способ связи:</label>
      <div>
        <label>
          <input type="radio" value="call" v-model="contactMethod" />
          Перезвонить
        </label>
        <label>
          <input type="radio" value="text" v-model="contactMethod" />
          Написать
        </label>
      </div>
    </div>

    <div class="form-item">
      <div v-if="contactMethod === 'text'" class="messaging-options">
        <label>Выберите мессенджер:</label>
        <div>
          <label>
            <input type="radio" value="Telegram" v-model="messagingApp" />
            Telegram
          </label>
          <label>
            <input type="radio" value="WhatsApp" v-model="messagingApp" />
            WhatsApp
          </label>
          <label>
            <input type="radio" value="Viber" v-model="messagingApp" />
            Viber
          </label>
        </div>
      </div>
    </div>


    <Button type="submit" variant="secondary" class="button">Отправить</Button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import Button from '~/components/ui/Button.vue'


const name = ref('')
const telephone = ref('')
const question = ref('')
const contactMethod = ref('call')
const messagingApp = ref('')



function formatPhoneNumber(event) {
  // Remove all non-digit characters except "+" for the prefix
  let input = event.target.value.replace(/\D/g, '');

  // Determine if the user started with "+7" or "8"
  let prefix = '';
  if (input.startsWith('7')) {
    prefix = '+7';
    input = input.slice(1); // Remove the initial "7" for formatting
  } else if (input.startsWith('8')) {
    prefix = '8';
    input = input.slice(1); // Remove the initial "8" for formatting
  }

  // Limit input to 10 digits after the initial prefix
  if (input.length > 10) {
    input = input.slice(0, 10);
  }

  // Apply the mask format based on the chosen prefix
  let formatted = prefix;
  if (input.length > 0) formatted += ' (' + input.slice(0, 3);
  if (input.length >= 4) formatted += ') ' + input.slice(3, 6);
  if (input.length >= 7) formatted += '-' + input.slice(6, 8);
  if (input.length >= 9) formatted += '-' + input.slice(8, 10);

  event.target.value = formatted; // Update the input's displayed value
  telephone.value = formatted; // Update the Vue model



}


async function submitForm() {
  const digitCount = telephone.value.replace(/\D/g, '').length;

  if (digitCount !== 11) {
    alert('Please enter a valid phone number with exactly 11 digits.');
    return; // Stop the submission if the condition is not met
  }

  try {
    const response = await $fetch('/api/telegram', {
      method: 'POST',
      body: {
        name: name.value,
        telephone: telephone.value.replace(/[ ()\-]/g, ''),
        question: question.value,
        contactMethod: contactMethod.value,
        messagingApp: messagingApp.value
      }
    })

    if (response.success) {
      alert('Form submitted successfully!')
      name.value = ''
      telephone.value = ''
      question.value = ''
      contactMethod.value = ''
      messagingApp.value = ''
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
.form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-item {
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: 40px;
  }
}

.form label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
}

.form input {
  padding: 10px;
  border-radius: calc(var(--border-radius-m) / 2);
  border: 1px solid gray;
}

.label-description{
  /* font-style: italic; */
  font-weight: 200;
  opacity: 0.3;
}

.button {
  margin-top: auto;
}

.messaging-options {
  display: flex;
  flex-direction: column;
}
</style>