<script setup lang="ts">
import Logo from 'assets/graphics/logo.svg'
import Welcome from '~/components/landing/Welcome.vue';
import ProductsUse from '~/components/landing/ProductsUse.vue';
import OurClients from '~/components/landing/OurClients.vue';
import Explore from '~/components/landing/Explore.vue';
import Gallery from '~/components/landing/Gallery.vue';
import Base from '~/components/landing/Base.vue';
import Market from '~/components/landing/Market.vue';
import Creation1 from '~/components/landing/Creation1.vue';
import Profit from '~/components/landing/Profit.vue';

const props = defineProps({
    openModal: {
        type: Function,
    }
})
</script>

<template>
    <!-- <section class="intro">
        <div class="background">
            <Logo class="logo" :fontControlled="false" />
        </div>
        <div class="categories">
            <Categories />
        </div>
    </section> -->

    <Welcome />
    <!-- <Explore /> -->
    <OurClients :openModal='props.openModal' />
    <Base :openModal='props.openModal' />
    <Market />
    <!-- <ProductsUse /> -->
    <Creation1 />
    <Profit :openModal='props.openModal' />


</template>

<style scoped>
.intro {
    padding-top: 10vh;
    height: 100vh;
}

.background {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 auto;
    padding: 100px 40px 85px;
    background-image: url('/images/abstract3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    border-radius: 20px;
    /* -webkit-box-shadow: 1px 1px 50px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 1px 1px 50px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 50px 0px rgba(0, 0, 0, 0.15); */
}

.logo {
    width: 50%;
    transform: scale(1.5);
    color: white;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    margin: 0 auto;
    padding-top: 2rem;
}
</style>


<style>
:root {
    /* --swiper-pagination-color: red; */
    --swiper-theme-color: rgb(152, 152, 152);
}

.my-swiper {
    padding-bottom: 40px;
    /* Space for pagination dots */
}

.my-swiper:hover {

    .swiper-button-prev,
    .swiper-button-next {
        opacity: 1;
    }
}

.my-swiper .swiper-button-next,
.my-swiper .swiper-button-prev {
    color: #fff;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    /* Change arrow color */
    background-color: rgba(0, 0, 0, 0.5);
    /* Add background color */
    border-radius: 50%;
    /* Make buttons circular */
    width: 40px !important;
    /* Custom size */
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: 18px;
    /* Customize arrow icon size */
}

/* Add hover effect */
.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.8);
    /* Darken background on hover */
}

.swiper-button-next {
    right: 10px;
    /* Adjust button position */
}

.swiper-button-prev {
    left: 10px;
    /* Adjust button position */
}
</style>