<template>
    <header class="header">
        <NuxtLink v-show="$route.path !== '/'" to="/">
            <Logo class="logo" :fontControlled="false" v-show="$route.path !== '/'" />
        </NuxtLink>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px 5px;
}

.logo {
    height: 60px;
}
</style>

<script setup>
import Logo from 'assets/graphics/logo.svg'

</script>