<template>
    <section class="gallery">
        <div v-for="(photo, i) in data" :key="i">
            <NuxtImg :src="photo.src" alt="Image" class="photo" />
        </div>
    </section>

</template>

<style>
.gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}
</style>

<script setup>
import { ref } from 'vue';

const data = [
    {
        src: 'images/mock1.jpg',
    },
    {
        src: 'images/mock2.jpg',
    },
];

const currentIndex = ref(0);

const nextImage = () => {
    if (currentIndex.value < data.length - 1) {
        currentIndex.value++;
    }
};

const prevImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

const currentImage = computed(() => data[currentIndex.value]);
</script>