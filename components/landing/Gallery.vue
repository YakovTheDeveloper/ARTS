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
    min-height: 470px;
    flex-shrink: 0;
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
    overflow: hidden;
    z-index: 1;
    border-radius: var(--border-radius-m);
    grid-column: span 2;

    background-image: url('/images/photos/4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

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
    flex-grow: 1;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);

    @media (max-width: 575.98px) {
        min-height: 400px;
    }
}

.gallery-button {
    position: absolute;
    bottom: calc(var(--container-padding)*4);
    /* position: relative; */
    /* bottom: 0; */
}
</style>