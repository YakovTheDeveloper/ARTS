<template>
    <button @click="props.openModal" class="button-container">
        Записаться
    </Button>
</template>


<script setup>
import Button from '~/components/ui/Button.vue';


const props = defineProps({
    openModal: {
        type: Function,
    }
})
</script>

<style scoped>
.button-container {
    position: relative;
    padding: 8px 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 400;
}

.button-container:after {
    transition: all 0.4s ease-in-out;
    content: '';
    width: 0;
    height: 1px;
    background-color: #faf9f8;
    position: absolute;
    z-index: 2;
    bottom: -1px;
    left: 0;
}

.button-container:before {
    transition: all 0.4s ease-in-out;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #000000;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
}

.button-container:hover:after {
    width: 100%;
}

.button-container:hover:before {
    width: 0;
}
</style>