<template>
    <footer class="footer">
        <div class="inner">
            <nav class="nav">
                <div class="data">
                    <Logo class="logo" :fontControlled="false" />
                    <div class="contacts">
                        <!-- <p>жк Futura, ул. Холмогорова, 17А</p>
                        <p>info@beautylabstore.ru</p>
                        <p>+7 926 100 33 38</p> -->
                    </div>
                </div>
                <ul class="list">
                    <li v-for="(item) in menuItems" class="list-item">
                        <NuxtLink :to="item.url" class="link">{{ item.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>



<style scoped>
.footer {
    width: 100%;
    background-color: rgb(19, 19, 19);
    /* background: linear-gradient(153deg, #2D3E4D 0%, rgb(0, 0, 0) 35%, rgb(36, 36, 36) 100%); */

    border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
}

.inner {
    max-width: var(--content-width);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: var(--items-gap);
    padding: calc(var(--container-padding) * 2.5) var(--container-padding);
    margin: 0 auto;
}

.nav {
    display: flex;
    gap: var(--items-gap);
    justify-content: space-between;
    align-items: center;
}

.data {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 30px;
}

.contacts {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    color: white;
    font-size: 0.8rem;
}

.list {
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    gap: var(--items-gap);


    @media (max-width: 575.98px) {
        flex-direction: column;
    }
}

.list-item {
    /* display: flex;
    height: fit-content;     */
}

.link {
    font-size: 0.9rem;
    color: white;
    text-decoration: none;
}

.logo {
    height: max(40px, var(--our-brands-height));
    color: white;
}
</style>


<script setup>
import Logo from 'assets/graphics/logo.svg'

const menuItems = [
    // { url: "/about-us", label: "о нас" },
    // { url: "/vacancies", label: "вакансии" },
    // { url: "/team", label: "наша команда" },
    // { url: "/ask-question", label: "задать вопрос" },
    // { url: "/promotions", label: "акции" },
    // { url: "/gallery", label: "галерея" },
    // { url: "/blog", label: "блог" }
];
</script>