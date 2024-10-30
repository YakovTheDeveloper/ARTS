<script setup lang="ts">
import Logo from 'assets/graphics/logo.svg'

import Explore from '~/components/landing/Explore.vue';
</script>
<!-- <NuxtImg src="images/photos/landing/mobile/welcome-1.jpg" alt="Image" class="photo" /> -->

<template>

    <Card class="welcome">
        <!-- <Typo variant="h1" align="center">
            Мы открылись!
        </Typo> -->
        <div class="main">
            <article class="text-content">
                <div>
                    <Typo variant="h1" align="center" color="black-2" offset>
                        Приятно познакомиться
                    </Typo>
                    <Typo>
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
            <div class="image-container">
                <!-- <Logo class="logo" :fontControlled="false" /> -->
                <NuxtImg src="images/photos/welcome.jpg" alt="Image" class="photo" />
            </div>
        </div>
        <!-- <div class="image-container-mobile">
            <NuxtImg src="images/photos/landing/mobile/welcome-7.jpg" alt="Image" class="photo-mobile" />
        </div> -->
        <Categories class="categories" />
    </Card>
</template>

<style scoped>
.welcome {
    height: calc(100vh - 80px + var(--container-padding));
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
        flex-direction: column-reverse;
    }
}

.text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
}

.image-container {
    max-height: 50vh;
    position: relative;
    border-radius: var(--border-radius-m);
    overflow: hidden;

    @media (max-width: 575.98px) {
        width: 70%;
        margin: auto;
    }
}

.photo {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.photo-mobile {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.categories {
    margin: auto 0;
}

.logo {
    position: absolute;
    top: 50px;
    left: 60px;
    /* transform: translateX(-50%); */

    width: 135px;
    color: white;
}
</style>
