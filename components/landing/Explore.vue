<template>
    <section class="explore">
        <!-- <Typo variant="h1">
            О нас
        </Typo> -->
        <div class="content">
            <NuxtLink class="feature" v-for="(feature) in features" :to="feature.link">
                <div class="image-container">
                    <NuxtImg :src="feature.imgSrc" alt="Image" class="image" />
                </div>

                <div class="text-content">
                    <Typo variant="caption" color="white">
                        {{ feature.label }}
                    </Typo>
                </div>
            </NuxtLink>

        </div>
    </section>

</template>


<style scoped>
.explore {
    max-width: var(--content-width);
    width: 100%;
}

.content {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(--items-gap);
}

.feature {
    /* height: 200px; */
    flex-grow: 1;
    background: rgb(74, 73, 88);
    background: linear-gradient(153deg, #2D3E4D 0%, rgb(0, 0, 0) 35%, rgb(0, 0, 0) 100%);
    /* border-radius: var(--border-radius-m); */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &:hover {
        opacity: 0.98;
    }
}

.text-content {
    position: relative;
    z-index: 1;
    padding: 20px;
    text-transform: uppercase;

    * {
        text-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px;
    }
}

.image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.image {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: top center; */
    opacity: 0.5;
}
</style>

<script setup>
import Card from '~/components/Card.vue';

const features = [
    {
        imgSrc: 'images/photos/2.jpg',
        label: 'Подробнее о нас',
        link: '/'
    },

    {
        imgSrc: 'https://masterpiecer-images.s3.yandex.net/9e8b414889e311ee8a0e92669a1675b3:upscaled',
        label: 'Наши работы',
        link: '/'
    },
    {
        imgSrc: 'images/photos/futura-building.png',
        label: 'Где мы находимся',
        link: '/'
    },

]

</script>
