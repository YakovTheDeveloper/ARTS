<template>
    <nav>
        <ul class="list">
            <li v-for="(category, i) in categories" :key="category.name"
                :class="`/${category.link}` === $route.path ? 'hide' : 'show'">
                <NuxtLink :to="`/${category.link}`" class="link">
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

.link {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    color: black;
    padding-bottom: 2px;
    position: relative;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.99); */
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
        color: white;
        /* padding-bottom: 10px; */
    }

}

.link:hover:before {
    padding: 23px 20px 20px;
    transform: translateX(-20px);
    background-color: rgb(0, 0, 0);
    /* width: 0%; */

}

.link:before {
    transition: all 0.2s ease-in-out;
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgb(49, 49, 49);
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
}

.link:hover:after {
    width: 100%;
}

.link:after {
    transition: all 0.4s ease-in-out;
    content: '';
    width: 0;
    height: 1px;
    /* transform: scale(-1); */
    background-color: #faf9f8;
    position: absolute;
    z-index: -1;
    bottom: 0px;
    left: 0;
}

.hide {
    display: none;
}
</style>

<script setup>
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
