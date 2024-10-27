<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="form-item">
      <label for="name">Имя</label>
      <input type="text" id="name" v-model="name" required />
    </div>

    <div class="form-item">
      <label for="question">Если есть вопросы</label>
      <input type="text" id="question" v-model="question" required />
    </div>

    <div class="form-item">
      <label for="telephone">Телефон для связи</label>
      <input type="tel" id="telephone" v-model="telephone" required />
    </div>

    <div class="form-item">
      <label>Предпочтительный способ связи:</label>
      <div>
        <label>
          <input type="radio" value="call" v-model="contactMethod"/>
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

async function submitForm() {
  try {
    const response = await $fetch('/api/telegram', {
      method: 'POST',
      body: {
        name: name.value,
        telephone: telephone.value,
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
  background-color: white;
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
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
}

.form input {
  padding: 10px;
  border-radius: calc(var(--border-radius-m) / 2);
  border: 1px solid gray;
}

.button {
  margin-top: 60px;
}

.messaging-options{
  display: flex;
  flex-direction: column;
}
</style>