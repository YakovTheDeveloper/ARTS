<template>
    <Card>
        <Typo variant="h1" offset align="center">Наша студия находится здесь</Typo>
        <div class="map">
            <div ref="mapRef" style="width: 100%; height: 100%;"></div>
        </div>
    </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Card from '~/components/Card.vue';
import Typo from '~/components/Typo.vue';

const mapRef = ref(null);

onMounted(async () => {
    // Load the 2GIS map script dynamically
    const script = document.createElement('script');
    script.src = 'https://maps.api.2gis.ru/2.0/loader.js';
    script.async = true;
    document.head.appendChild(script);

    // Wait for the script to load and initialize the map
    const coords = [56.876097, 53.213179]

    script.onload = () => {
        console.log('wtf', window.DG)
        if (window.DG) {
            window.DG.then(() => {
                const map = window.DG.map(mapRef.value, {
                    center: coords,
                    zoom: 14,
                });
                DG.marker(coords).addTo(map);
            });
        }
    };
});
</script>

<style scoped>
.map {
    width: 600px;

    margin: 0 auto;
    height: 400px;
    display: flex;
}

/* Add any component-specific styling here */
</style>