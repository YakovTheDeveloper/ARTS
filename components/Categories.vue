<template>
    <nav>
        <ul class="list">
            <li v-for="(category, i) in categories" :key="category.name"
                :class="`/${category.link}` === $route.path ? 'hide' : 'show'">


                <Link :to="`/${category.link}`">
                {{ category.name }}
                </Link>

                <!-- <NuxtLink :to="`/${category.link}`" class="link">
                    {{ category.name }}
                </NuxtLink> -->
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px 15px;
}


.hide {
    display: none;
}
</style>

<script setup>
import Link from '~/components/ui/Link.vue';

const categories = [
    {
        name: 'маникюр',
        link: 'manicure'
    },
    {
        name: 'педикюр',
        link: 'pedicure'
    },
    {
        name: 'волосы',
        link: 'hair'
    },
    {
        name: 'макияж и брови',
        link: 'makeup'
    },
    {
        name: 'косметология',
        link: 'cosmetology'
    },

    {
        name: 'шугаринг',
        link: 'sugaring'
    },
]
</script>
