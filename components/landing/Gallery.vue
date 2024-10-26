<template>
    <Card>
        <div class="container">
            <div class="gallery">
                <div class="inner">
                    <div class="content">
                        <Typo variant="h1" color="white">
                            Комфортная атмосфера
                        </Typo>
                        <Typo variant="h2" color="white">
                            в которую хочется возвращаться
                        </Typo>
                    </div>
                    <Button class="gallery-button">
                        галерея
                    </Button>
                </div>
            </div>
            <Explore />
        </div>
    </Card>
</template>

<script setup>
import Card from '~/components/Card.vue';
import Explore from '~/components/landing/Explore.vue';
import Typo from '~/components/Typo.vue';
import Button from '~/components/ui/Button.vue';

</script>

<style scoped>
.container {
    width: 100%;
    width: var(--content-width);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--items-gap);
    position: relative;

    @media (max-width: 575.98px) {
        display: flex;
        flex-direction: column;
    }

}



.gallery {
    position: relative;
    height: 470px;
    overflow: hidden;
    z-index: 1;
    border-radius: var(--border-radius-m);
    grid-column: span 2;

    background-image: url('/images/photos/4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/photos/4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}


.inner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-align: center;
    padding: 20px;
    height: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
}

.gallery-button {
    position: absolute;
    bottom: calc(var(--container-padding)*4);
    /* position: relative; */
    /* bottom: 0; */
}
</style>