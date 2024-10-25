<template>
    <div class="container">
        <section class="section">
            <div class="price-container">
                <slot name="heading"></slot>
                <slot name="price"></slot>
            </div>
            <slot name="our-works"></slot>
        </section>
        <Categories class="categories" />
    </div>
</template>

<style scoped>
.container {
    max-width: var(--content-width);
}

.price-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
}

.section {
    width: 100%;
    padding: 10vh var(--container-padding) 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.categories {
    padding: 0 var(--container-padding);
    margin: 100px 0;
}
</style>
