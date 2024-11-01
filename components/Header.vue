<template>
    <header class="header">
        <NuxtLink to="/">
            <Logo :class="['logo', $route.path === '/' ? 'logo-mobile-main' : null]" :fontControlled="false" />
        </NuxtLink>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px 5px;
    position: relative;
    z-index: 2;
}

.logo {
    height: 40px;
}

.logo-mobile-main {
    @media (max-width: 575.98px) {
        color: white;
        height: 60px;
    }
}
</style>

<script setup>
import Logo from 'assets/graphics/logo.svg'

</script>

<!-- v-show="$route.path !== '/'" -->