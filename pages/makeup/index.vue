<script setup lang="ts">
import CategoryLayout from '~/components/layout/CategoryLayout.vue';

const priceData = {
    priceVariants: null,
    content: [
        {
            displayName: 'Дневной',
            price: 1900,
        },
        {
            displayName: 'Вечерний',
            price: 2300,
        },
        {
            displayName: 'Брови оформление',
            price: 600,
        },
        {
            displayName: 'Брови оформление и окрашивание',
            price: 1000,
        },
        {
            displayName: 'Долговременная укладка бровей',
            price: 1500,
        },
        {
            displayName: 'Окрашивание ресинц',
            price: 600,
        },
    ]
}
</script>

<template>
    <CategoryLayout>
        <template #heading>
            Макияж и брови
        </template>

        <template #price>
            <PriceList :priceData="priceData" />
        </template>

        <template #our-works>
            <OurWork />
        </template>
    </CategoryLayout>
</template>