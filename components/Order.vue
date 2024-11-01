<template>
    <Card>
        <Typo variant="h1" offset align="center">Запись</Typo>
        <div class="order-variant">
            <Typo variant="h2" offset align="left">Онлайн</Typo>
            <ul class='order-list'>
                <li class='order-item' v-for="(item) in links">
                    <Link :to="item.link" isExternal>
                    {{ item.label }}
                    </Link>
                </li>
            </ul>
        </div>
        <div class="order-variant">
            <Typo variant="h2" offset align="left">По телефону</Typo>
            <ul class='order-list'>
                <li class='order-item'>
                    <Link :to="`tel:+6494461709`">
                    +7 926 100 33 38
                    </Link>
                </li>
            </ul>
        </div>
    </Card>
</template>

<style scoped>
.order-variant {
    display: flex;
    flex-direction: column;
    padding: calc(var(--container-padding) * 2);
}

.order-list {
    padding: var(--container-padding) 0;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: space-between;
    gap: calc(var(--items-gap) * 2) var(--items-gap);
}

.order-item {}
</style>

<script setup>
import Card from '~/components/Card.vue';
import Typo from '~/components/Typo.vue';
import Link from '~/components/ui/Link.vue';

const links = [
    {
        link: 'https://dikidi.net/',
        label: 'Dikidi',
    },
    {
        link: 'https://dikidi.net/',
        label: 'WhatsApp',
    },
    {
        link: 'https://dikidi.net/',
        label: 'Viber',
    },
    {
        link: 'https://dikidi.net/',
        label: 'Telegram',
    },
    {
        link: 'https://dikidi.net/',
        label: 'Instagram',
    },
    {
        link: 'https://dikidi.net/',
        label: 'VK',
    },
]
</script>