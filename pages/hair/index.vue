<script setup lang="ts">
import CategoryLayout from '~/components/layout/CategoryLayout.vue';

const priceData = [
    {
        displayName: 'Тонирование/ стойкое окрашивание',
        price: 3500,
        price2: 4500,
        border: 'от'
    },
    {
        displayName: 'Контуринг',
        price: 5000,
        price2: 7000,
        border: 'от'
    },
    {
        displayName: 'Тотал блонд',
        price: 6000,
        price2: 7500,
        border: 'от'
    },
    {
        displayName: 'Тотал коррекция',
        price: 5000,
        price2: 7000,
        border: 'от'
    },
    {
        displayName: 'Сложное окрашивание',
        price: 7500,
        price2: 8500,
        border: 'от'
    },
    {
        displayName: 'Выход из черного',
        description: '(рассчитывается индивидуально)',
        price: 6000,
        price2: 8000,
        border: 'от'
    },
    {
        displayName: 'Процедуры восстановления волос Beauty Genesis Alfaparf',
        description: '(рассчитывается индивидуально)',
        price: 2600,
        border: 'от'
    },
    {
        displayName: 'Экспресс уход',
        price: 1200,
        border: 'от'
    },
    {
        displayName: 'Пилинг кожи головы',
        price: 1000,
        price2: 1500,
        border: 'от'
    },
    {
        displayName: 'Легкая коррекция цвета',
        price: 1000,
        border: 'от'
    },
    {
        displayName: 'Стрижка',
        price: 1000,
        price2: 2000,
    },
    {
        displayName: 'Оформление челки ',
        price: 500,
        price2: 1000,
    },
    {
        displayName: 'Укладка',
        price: 1500,
        price2: 2000,
        border: 'от'
    },
    {
        displayName: 'Прическа',
        price: 2500,
    },
]
</script>

<template>
    <CategoryLayout>
        <template #heading>
            <Typo variant="h1">Волосы</Typo>
        </template>

        <template #price>
            <PriceList :priceData="priceData" />
        </template>

        <template #our-works>
            <OurWork />
        </template>
    </CategoryLayout>
</template>