<script setup lang="ts">
const counter = ref(0);

const handleClick = () => {
    counter.value++;
    console.log(counter)
};
</script>

<template>
    <div>
        <p>Count: {{ counter }}</p>
        <button @click="handleClick">Increment</button>
    </div>
</template>
