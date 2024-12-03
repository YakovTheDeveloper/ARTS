<template>
  <div>
    <Header />
    <main class="main">
      <NuxtPage :openModal="openModal" />
    </main>
    <Footer />
    <!-- <OrderButtonFixed @click="openModal" /> -->
    <!-- <Modal :isVisible="isModalVisible" @close="closeModal">

      <Typo variant="h2" align="center" offset>Записаться или задать вопрос</Typo>
      <ServiceSignUpForm />

    </Modal> -->
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  /* gap: 10px; */
}
</style>

<script setup lang="ts">
import Card from '~/components/Card.vue';
import OrderButtonFixed from '~/components/common/OrderButtonFixed.vue';
import ServiceSignUpForm from '~/components/form/ServiceSignUpForm.vue';
import Modal from '~/components/Modal.vue';
const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>
