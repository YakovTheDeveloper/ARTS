<script setup lang="ts">
import Logo from 'assets/graphics/logo.svg'

import Explore from '~/components/landing/Explore.vue';
</script>
<!-- <NuxtImg src="images/photos/landing/mobile/welcome-1.jpg" alt="Image" class="photo" /> -->

<template>
    <div class="video-container-mobile">
        <video autoplay muted loop playsinline class="video-background">
            <source src="/video/welcome-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="video-container-aside">
            <Typo color="white" variant="h1" class="mobile-title">
                <span>Яркий</span> эпизод Вашей жизни
            </Typo>
            <!-- <Typo color="white" variant="h1" class="mobile-title">Вашей жизни</Typo> -->
        </div>
        <div class="spot spot-1"></div>
        <div class="spot spot-2"></div>
        <div class="spot spot-3"></div>
    </div>
    <Card class="welcome">
        <div class="main">
            <article class="text-content">
                <div>
                    <Typo variant="h1" align="center" color="black-2" offset>
                        Приятно познакомиться
                    </Typo>
                    <Typo class="description">
                        Уход за собой — комплекс процедур, которые продлевают молодость, помогают сохранить
                        положительный
                        настрой.
                        Сияющая кожа, чистые аккуратно уложенные волосы, привлекательный макияж, стильный маникюр,
                        красивая
                        одежда —
                        все это орудия, с помощью которых каждая женщина может стать королевой.
                    </Typo>
                </div>
            </article>
            <!-- <div class="image-container">
                <NuxtImg src="images/photos/welcome.jpg" alt="Image" class="photo" />
            </div> -->
        </div>
        <Categories class="categories" :inverseColor="true" />

        <!-- <div class="image-container-mobile-bg">
            <NuxtImg src="images/bg/background-2.webp" alt="Image" class="photo-mobile-bg" />
        </div> -->
    </Card>
</template>

<style scoped>
.welcome {
    height: calc(100vh - 80px + var(--container-padding));
    margin-bottom: 0;
    position: relative;

    @media (max-width: 575.98px) {
        /* display: none; */
        background: rgb(0, 0, 0);
    }

}

.image-container-mobile {}

.video-container-mobile {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    overflow: hidden;
    height: 93vh;
    width: 100%;
    background: rgb(33, 33, 33);
    background: rgb(23, 23, 23);
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
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.85) 85%, rgba(0, 0, 0, 0.93) 100%);
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
        letter-spacing: -3px;
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
    margin-top: 10px;
    display: grid;
    grid-template-columns: 5fr 6fr;
    gap: 40px;
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

.logo {
    position: absolute;
    top: 50px;
    left: 60px;
    /* transform: translateX(-50%); */

    width: 135px;
    color: white;
}

.spot {
    position: absolute;
    width: 200vw;
    /* Make it large to cover the screen */
    height: 200vh;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 60%);
    animation: spotMove 10s ease-in-out infinite, spotFade 5s ease-in-out infinite;
    opacity: 0.3;
}

.spot-1 {
    left: 10%;
    top: 10%;
    animation-duration: 12s;
}

.spot-2 {
    right: 15%;
    bottom: 15%;
    animation-duration: 15s;
}

.spot-3 {
    left: 50%;
    top: 50%;
    animation-duration: 8s;
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
