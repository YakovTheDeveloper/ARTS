<template>
    <header class="header">
        <NuxtLink  to="/">
            <Logo class="logo" :fontControlled="false"  />
        </NuxtLink>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px 5px;
}

.logo {
    height: 40px;
}
</style>

<script setup>
import Logo from 'assets/graphics/logo.svg'

</script>

<!-- v-show="$route.path !== '/'" -->