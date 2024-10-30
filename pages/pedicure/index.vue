<script setup lang="ts">
import CategoryLayout from '~/components/layout/CategoryLayout.vue';

const priceData = {
    priceVariants: null,
    content: [
        {
            displayName: 'Полный',
            description: 'с покрытием гель лак',
            price: 2600,
        },
        {
            displayName: 'Полный',
            description: 'без покрытия',
            price: 1900,
        },
        {
            displayName: 'Обработка пальчиков',
            description: 'с покрытием гель лак',
            price: 1900,
        },
    ]
}
</script>

<template>
    <CategoryLayout>
        <template #heading>
            Педикюр
        </template>

        <template #price>
            <PriceList :priceData="priceData" />
        </template>

        <template #our-works>
            <OurWork />
        </template>
    </CategoryLayout>
</template>