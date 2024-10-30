<script setup lang="ts">
import CategoryLayout from '~/components/layout/CategoryLayout.vue';

const priceData = {
    priceVariants: ['', `первичная процедура`],
    content: [
        {
            displayName: 'Бикини глубокое',
            price: 1000,
            price2: 1100,
            border: 'от',
        },
        {
            displayName: 'Бикини классика',
            price: 900,
            price2: 1000,
            border: 'от',
        },
        {
            displayName: 'Подмышки',
            price: 400,
            price2: 450,
            border: 'от',
        },
        {
            displayName: 'Руки',
            price: 800,
            price2: 900,
            border: 'от',
        },
        {
            displayName: 'Ноги полностью',
            price: 1200,
            price2: 1300,
            border: 'от',
        },
        {
            displayName: 'Ноги голень',
            price: 950,
            price2: 1000,
            border: 'от',
        },
        {
            displayName: 'Ноги бедра',
            price: 700,
            price2: 800,
            border: 'от',
        },
        {
            displayName: 'Лицо',
            price: 350,
            price2: 450,
            border: 'от',
        },
    ]
}
</script>

<template>
    <CategoryLayout>
        <template #heading>
            Шугаринг
        </template>

        <template #price>
            <PriceList :priceData="priceData" />
        </template>

        <template #our-works>
            <OurWork />
        </template>
    </CategoryLayout>
</template>