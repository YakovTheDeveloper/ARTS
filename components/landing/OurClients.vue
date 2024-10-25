<template>
    <Card class="our-clients">
        <Typo variant="h1" class="title" align="center" offset>
            Подчеркнем вашу красоту
        </Typo>
        <Team :people="[
            {
                name: 'Ольга',
                label:'окрашивание, выход из черного',
                imgSrc: '/images/photos/customers/landing/1.jpg'
            },
            {
                name: 'Наталья',
                label:'аппаратный маникюр',
                imgSrc: '/images/photos/customers/landing/2.jpg'
            },
            {
                name: 'Анна',
                label:'вечерний макияж',
                imgSrc: '/images/photos/customers/landing/3.jpg'
            },
        ]" />

    </Card>
</template>

<style scoped>
.our-clients {
    /* background-color: #0a0e12; */
    border-radius: 50px 50px 0 0;
}

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
