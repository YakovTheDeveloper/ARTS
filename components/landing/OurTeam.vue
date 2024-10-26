<template>
    <Card>
        <Typo variant="h1" class="title" align="center" offset>
            Наша команда
        </Typo>
        <Team :people="[
            {
                name: 'Екатерина',
                imgSrc: '/images/photos/master-ekaterina.jpg',
                label: 'мастер-маникюрист'
            },
            {
                name: 'Светлана',
                imgSrc: '/images/photos/master-svetlana.jpg',
                label: 'мастер по волосам'
            },
            {
                name: 'Татьяна',
                imgSrc: '/images/photos/master-tatiana.jpg',
                label: 'мастер-визажист'
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
