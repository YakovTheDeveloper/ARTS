<template>
    <Card class="our-clients">
        <Typo variant="h1" class="title" align="center" offset>
            ИДЕЯ
        </Typo>
        <Team :people="[
            {
                label: 'Ижевск – креативный и творческий город',
                imgSrc: '/images/photos/idea/1.jpg'
            },

            {
                label: 'В Ижевске есть Институт искусства и дизайна УДГУ',
                imgSrc: '/images/photos/idea/2.jpg'
            },
            {
                label: 'В Ижевске – работает уникальный человек Сергей Орлов',
                imgSrc: '/images/photos/idea/3.jpg'
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
import OrderButton from '~/components/common/OrderButton.vue';
import Button from '~/components/ui/Button.vue';
const props = defineProps({
    openModal: {
        type: Function,
    }
})
</script>
