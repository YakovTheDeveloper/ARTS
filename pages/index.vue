<script setup lang="ts">
import Logo from 'assets/graphics/logo.svg'
import OurTeam from '~/components/landing/OurTeam.vue';
import Welcome from '~/components/landing/Welcome.vue';
import ProductsUse from '~/components/landing/ProductsUse.vue';
import OurClients from '~/components/landing/OurClients.vue';
import Explore from '~/components/landing/Explore.vue';
import Gallery from '~/components/landing/Gallery.vue';

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
    <ProductsUse />
    <Gallery :openModal='props.openModal'/>
    <OurTeam :openModal='props.openModal'/>

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