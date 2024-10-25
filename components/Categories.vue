<template>
    <nav>
        <ul class="list">
            <li v-for="(category, i) in categories" :key="category.name"
                :class="`/${category.link}` === $route.path ? 'hide' : 'show'">
                <NuxtLink :to="`/${category.link}`" class="clickable">
                    {{ category.name }}
                </NuxtLink>
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

.clickable {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    color: black;
    text-decoration: none;

    &:hover {
        opacity: 0.5;
    }
}

.hide {
    display: none;
}
</style>

<script setup>
const categories = [{
    name: 'макияж',
    link: 'makeup'
},
{
    name: 'маникюр',
    link: 'manicure'
},
{
    name: 'педикюр',
    link: 'pedicure'
},
{
    name: 'косметология',
    link: 'cosmetology'
},
{
    name: 'волосы',
    link: 'hair'
},
{
    name: 'шугаринг',
    link: 'sugaring'
},
]
</script>
