<template>
    <Card class="our-clients">
        <Typo variant="h1" class="title" align="center" offset>
            БАЗА
        </Typo>
        <Team :people="[
            {
                label: `
                Трудовые ресуры: студенты, творческая молодежь 
                `,
                imgSrc: '/images/photos/base/1.jpg'
            },

            {
                label: 'Технологическая база - знания и опыт',
                imgSrc: '/images/photos/base/2.jpg'
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
