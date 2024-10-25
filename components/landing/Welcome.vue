<script setup lang="ts">
import Logo from 'assets/graphics/logo.svg'

import Explore from '~/components/landing/Explore.vue';
</script>

<template>

    <Card class="welcome">
        <!-- <Typo variant="h1" align="center">
            Мы открылись!
        </Typo> -->
        <div class="main">
            <article class="text-content">
                <Typo variant="h1" align="center" color="black-2">
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
                <Typo>
                    {{ ' ' }}
                </Typo>
            </article>
            <div class="image-container">
                <Logo class="logo" :fontControlled="false" />
                <NuxtImg src="images/photos/welcome.jpg" alt="Image" class="photo" />
            </div>
        </div>
        <Categories class="categories" />
    </Card>
</template>

<style scoped>
.welcome {
    height: 100vh;
}

.container {
    display: flex;
    flex-direction: column;
    gap: var(--items-gap);
}

.main {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 5fr 6fr;
    gap: 40px;
}

.text-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
}

.image-container {
    position: relative;
}

.photo {
    height: 100%;
    border-radius: var(--border-radius-m);
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
    color:white;
}
</style>
