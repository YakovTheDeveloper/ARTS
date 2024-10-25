<template>
    <footer class="footer">
        <div class="inner">
            <nav class="nav">
                <div class="data">
                    <Logo class="logo" :fontControlled="false" />
                </div>
                <ul class="list">
                    <li v-for="(item) in menuItems" class="list-item">
                        <NuxtLink :to="item.url" class="link">{{ item.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="contacts">
                <p>жк Futura, ул. Холмогорова, 17А</p>
                <p>+7 926 100 33 38</p>
                <p>info@beautylabstore.ru</p>
            </div>
        </div>
    </footer>
</template>



<style scoped>
.footer {
    width: 100%;
    background-color: rgb(36, 36, 39);
    border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
}

.inner {
    max-width: var(--content-width);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 30px;
    padding: 30px var(--container-padding) 30px;
    margin: 0 auto;
}

.nav{
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
}

.data {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
}

.contacts {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: white;
    font-size: 0.8rem;
}

.list {
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    gap: 35px;
}

.list-item {
    /* display: flex;
    height: fit-content;     */
}

.link {
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
}

.logo {
    height: 55px;
    color: white;
}
</style>


<script setup>
import Logo from 'assets/graphics/logo.svg'

const menuItems = [
    { url: "/about-us", label: "о нас" },
    { url: "/vacancies", label: "вакансии" },
    { url: "/team", label: "наша команда" },
    { url: "/ask-question", label: "задать вопрос" },
    { url: "/promotions", label: "акции" },
    { url: "/gallery", label: "галерея" },
    // { url: "/blog", label: "блог" }
];
</script>