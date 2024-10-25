<template>
    <Card>
        <Typo variant="h1" class="title" align="center" offset>
            Наша команда
        </Typo>
        <Team :people="[
            {
                name: 'Екатерина',
                imgSrc: '/images/photos/master-ekaterina.jpg'
            },
            {
                name: 'Светлана',
                imgSrc: '/images/photos/master-svetlana.jpg'
            },
            {
                name: 'Татьяна',
                imgSrc: '/images/photos/master-tatiana.jpg'
            },
        ]" />

    </Card>
</template>

<style scoped>
.title {
    position: relative;

}

/* .title:after {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    content: '';
    width: 130px;
    height: 100px;
    object-fit: contain;
    background: url('assets/graphics/magic.svg') center no-repeat;
} */
</style>

<script setup>
import Magic from 'assets/graphics/magic.svg'
</script>
