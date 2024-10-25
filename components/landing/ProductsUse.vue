<template>
    <div class="brands">
        <div class="brand-track">
            <div class="brand-container" v-for="(brand, index) in repeatedBrands" :key="index">
                <NuxtImg :src="brand.imgUrl" alt="Brand Logo" class="logo" />
            </div>
        </div>
    </div>
</template>

<script setup>
const brands = [
    { imgUrl: "images/brands/keune-logo.png" },
    { imgUrl: "images/brands/logo-alfaparf.jpg" },
    { imgUrl: "images/brands/oyster-logo.svg" },
    { imgUrl: "images/brands/vcolor-logo.png" },
];
// Duplicate the brands array to make the scrolling continuous
const repeatedBrands = [...brands, ...brands];
</script>

<style scoped>
.brands {
    overflow: hidden;
    width: 100%;
    padding: 120px 0 160px;
}

.brand-track {
    display: flex;
    gap: 120px; /* Space between logos */
    animation: scroll 30s linear infinite;
}

.brand-container {
    flex: 0 0 auto; /* Prevents items from wrapping */
}

.logo {
    height: 50px;
    object-fit: contain;
}


@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>
