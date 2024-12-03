<script setup lang="ts">
import Logo from 'assets/graphics/logo.svg'

import Explore from '~/components/landing/Explore.vue';
</script>
<!-- <NuxtImg src="images/photos/landing/mobile/welcome-1.jpg" alt="Image" class="photo" /> -->

<template>
    <!-- <div class="video-container-mobile">
        <div class="video-container-aside">
            <Typo color="white" variant="h1" class="mobile-title">
                <span>Яркий</span> эпизод Вашей жизни
            </Typo>
        </div>
    </div> -->
    <Card class="welcome">
        <div class="spot spot-1"></div>
        <div class="spot spot-2"></div>
        <div class="spot spot-3"></div>
        <div class="main">


            <div class="header">
                <Typo variant="h1" align="center" color="black-2" offset>
                    ТВОРЧЕСКАЯ МАНУФАКТУРА
                </Typo>
                <Typo variant="subtitle" align="left" offset color="orange">
                    как это будет
                </Typo>
            </div>
            <div>
                <Logo class="logo" :fontControlled="false" />
            </div>
            <div class="footer">
                <Typo variant="subtitle" align="center" color="black-2" offset>
                    2024-2025
                </Typo>
            </div>

        </div>
        <!-- <Categories class="categories" :inverseColor="true" /> -->
    </Card>
</template>

<style scoped>
.header {
    margin: 0 auto;
    max-width: 1000px;
}

.logo {
    display: flex;
    margin: 0 auto;
    color: black;
    height: 240px;
}

.welcome {
    overflow: hidden;
    height: 100vh;
    margin-bottom: 0;
    position: relative;

    @media (max-width: 575.98px) {
        /* display: none; */
        /* background: rgb(0, 0, 0); */
    }

}

.footer {}

.image-container-mobile {}

.video-container-mobile {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    overflow: hidden;
    height: 93vh;
    width: 100%;
    /* background: rgb(33, 33, 33);
    background: rgb(23, 23, 23); */
    /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.85) 85%, rgba(0, 0, 0, 0.9) 100%); */
    z-index: 1;

    @media (max-width: 575.98px) {
        display: flex;
        /* display: none; */
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.85) 85%, rgba(0, 0, 0, 0.93) 100%); */
    }
}

.video-container-aside {
    width: 45%;
    left: -15px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    span {
        font-style: italic;
        font-size: 2.5rem;
        font-weight: 100;
    }
}

.mobile-title {
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    font-weight: 400;
}

.image-container-mobile-bg {
    display: none;
    position: absolute;
    top: -150px;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.02;
    z-index: -1;

    @media (max-width: 575.98px) {
        display: block;
    }
}

.container {
    display: flex;
    flex-direction: column;
    gap: var(--items-gap);
}

.main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    justify-content: space-evenly;
    z-index: 1;

    @media (max-width: 575.98px) {
        display: flex;
        gap: 10px;
        flex-direction: column-reverse;

        * {
            text-align: center !important;
        }
    }
}

.text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;

    @media (max-width: 575.98px) {
        display: none;
    }
}

.description {}

.image-container {
    height: 400px;
    position: relative;
    border-radius: var(--border-radius-m);
    overflow: hidden;

    @media (max-width: 575.98px) {
        /* display: none; */
        height: 50vh;
        width: 100%;
        margin: auto;
    }
}

.video-background {
    /* width: 50%; */
    /* margin: 0 auto; */
    width: 50%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

.photo {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.photo-mobile-bg {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.categories {
    /* margin: auto 0; */
    margin: auto;
    margin: auto 0 13vh;
    z-index: 2;
}

.spot {
    position: absolute;
    width: 200vw;
    /* Make it large to cover the screen */
    height: 200vh;
    background: radial-gradient(circle, rgba(254, 220, 2, 0.862), transparent 60%);
    animation: spotMove 10s ease-in-out infinite, spotFade 5s ease-in-out infinite;
    opacity: 0.3;
}

.spot-1 {
    left: 10%;
    top: 10%;
    animation-duration: 12s;
    background: radial-gradient(circle, rgba(13, 187, 140, 0.862), transparent 30%);

}

.spot-2 {
    right: 15%;
    bottom: 15%;
    animation-duration: 15s;
    background: radial-gradient(circle, rgba(8, 215, 15, 0.862), transparent 30%);

}

.spot-3 {
    left: 50%;
    top: 50%;
    animation-duration: 8s;
    background: radial-gradient(circle, rgba(230, 255, 9, 0.862), transparent 30%);

}

@keyframes spotMove {
    0% {
        transform: translate(-30%, -30%) scale(1);
        opacity: 0.3;
    }

    25% {
        transform: translate(30%, -40%) scale(1.2);
        opacity: 0.4;
    }

    50% {
        transform: translate(0%, 40%) scale(0.8);
        opacity: 0.2;
    }

    75% {
        transform: translate(-20%, 10%) scale(1.3);
        opacity: 0.3;
    }

    100% {
        transform: translate(-30%, -30%) scale(1);
        opacity: 0.3;
    }
}

@keyframes spotFade {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.4;
    }
}
</style>
