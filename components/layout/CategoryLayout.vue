<template>
    <div class="container">
        <section class="section">
            <div class="price-container">

                <Typo variant="h1">
                    <slot name="heading">
                    </slot>
                </Typo>
                <!-- <div class="price-description">
                        <span>мастер</span>
                        <span>эксперт</span>
                    </div> -->


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

.price-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--items-gap);
}

.section {
    width: 100%;
    padding: 10vh var(--container-padding) 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 130px;

    @media (max-width: 575.98px) {
        grid-template-columns: 1fr;
    }

}

.categories {
    padding: 0 var(--container-padding);
    margin: 100px 0;
}
</style>
