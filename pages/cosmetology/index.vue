<script setup lang="ts">
import CategoryLayout from '~/components/layout/CategoryLayout.vue';

const priceData = {
    priceVariants: null,
    content: [
        {
            displayName: 'Подбор домашнего ухода',
            price: 1500,
        },
        {
            displayName: 'Чистка, пилинг',
            price: 3000,
        },
        {
            displayName: 'Чистка, комплекс пилингов',
            price: 3500,
        },
        {
            displayName: 'Массаж лица',
            price: 1500,
        },
        {
            displayName: 'Массаж лица, пилинг',
            price: 1900,
        },
        {
            displayName: 'Комплекс анти-акне',
            price: 4000,
        },
        {
            displayName: 'Комплекс сияние кожи',
            price: 3000,
        },
    ]
}
</script>

<template>
    <CategoryLayout>
        <template #heading>
            Косметология
        </template>

        <template #price>
            <PriceList :priceData="priceData" />
        </template>

        <template #our-works>
            <OurWork />
        </template>
    </CategoryLayout>
</template>