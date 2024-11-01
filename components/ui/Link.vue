<template>
    <component :is="isExternal ? 'a' : NuxtLink" :href="isExternal ? to : undefined" :to="isExternal ? undefined : to"
        class="link" :target="isExternal ? '_blank' : undefined" :rel="isExternal ? 'noopener noreferrer' : undefined">
        <slot />
    </component>
</template>

<script setup>
import { defineProps } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    isExternal: {
        type: Boolean,
        default: false,
    },
})
</script>

<style scoped>
.link {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    color: black;
    padding-bottom: 2px;
    position: relative;
    transition: all 0.2s ease-in-out;
    width: fit-content;
}

.link:hover {
    opacity: 0.8;
    color: white;
}

.link:before,
.link:hover:before,
.link:after,
.link:hover:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    transition: all 0.2s ease-in-out;
}

.link:before {
    width: 100%;
    background-color: rgb(49, 49, 49);
    z-index: -1;
}

.link:hover:before {
    background-color: rgb(0, 0, 0);
    padding: 23px 20px 20px;
    transform: translateX(-20px);
}

.link:after {
    width: 0;
    background-color: #faf9f8;
    z-index: -1;
    transition: all 0.4s ease-in-out;
}

.link:hover:after {
    width: 100%;
}
</style>