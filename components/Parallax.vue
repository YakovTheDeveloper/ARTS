<template>
    <div class="container">
        <div class="background">
        </div>
        <div class="parallax-container" ref="parallaxContainer">
            <div class="parallax-bg"></div>
            <div class="content">
                <slot></slot>
                <Button class="gallery-button">
                    галерея
                </Button>
            </div>
        </div>
        <Explore/>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Explore from '~/components/landing/Explore.vue';
import Button from '~/components/ui/Button.vue';

const parallaxContainer = ref(null);
const backgroundPosition = ref(0);

</script>

<style scoped>
.container {
    width: 100%;
    width: var(--content-width);
    display: grid;
    grid-template-columns: 7fr 3fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--items-gap);
    position: relative;

}

.background {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    /* background: url('images/bg/background-2.webp') center no-repeat; */
}

.parallax-container {
    /* max-width: max(400px, 50%); */
    position: relative;
    height: 470px;
    overflow: hidden;
    z-index: 1;
    border-bottom-right-radius: var(--border-radius-m);
    grid-column: span 2;
    /* margin: auto; */
}

/* .parallax-container {
    width: 100%;
    position: relative;
    height: 470px;
    overflow: hidden;
    margin-bottom: 60px;
} */

.parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/photos/2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
}

.content {
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-align: center;
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
}

.gallery-button{
    margin-top: 1rem;
}
</style>