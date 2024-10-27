<script setup lang="ts">
import CategoryLayout from '~/components/layout/CategoryLayout.vue';

const priceData = {
    priceVariants: null,
    content: [
        {
            displayName: 'Маникюр',
            description: 'аппаратный, комби',
            price: 1100,
            border: ''
        },
        {
            displayName: 'Маникюр с покрытием гель лак база',
            price: 1700,
            border: ''
        },
        {
            displayName: 'Однотонное покрытие',
            price: 1900,
            border: ''
        },
        {
            displayName: 'Укрепление',
            description: 'акригель, гель',
            price: 2200,
            border: ''
        },
        {
            displayName: 'Наращивание ногтей',
            description: 'гелевые типсы, акригель верхние формы',
            price: 2200,
            border: 'от'
        },
    ]
}
</script>

<template>
    <CategoryLayout>
        <template #heading>
            <Typo variant="h1">Маникюр</Typo>
        </template>

        <template #price>
            <PriceList :priceData="priceData" />
        </template>

        <template #our-works>
            <OurWork />
        </template>
    </CategoryLayout>
</template>