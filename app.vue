<template>
  <div>
    <Header />
    <main class="main">
      <NuxtPage />
    </main>
    <Footer/>
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
