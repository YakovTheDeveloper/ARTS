<template>
    <div class="price-list">
        <div v-for="(data, index) in priceData" :key="index" class="price-line">
            <div class="service">
                <p class="service-name">{{ data.displayName }}</p>
                <p v-show="data.description" class="service-description">{{ data.description }}</p>
            </div>
            <div class="price-container">
                <p class="price" v-show="data.price">
                    <span v-show="data.border" class="price-border-text">
                        {{ data.border }}
                    </span>
                    {{ data.price }}
                </p>
                <p class="price" v-show="data.price2">
                    <span v-show="data.border" class="price-border-text">
                        {{ data.border }}
                    </span>
                    {{ data.price2 }}
                </p>
            </div>
        </div>
    </div>
</template>
<!-- <template>
    <div class="price-list">
        <div v-for="(data, index) in priceData" :key="index" class="price-line">
            <p class="service-name">{{ data.displayName }}</p>
            <p v-show="data.description" class="service-description">{{ data.description }}</p>
            <p class="price">
                <span v-show="data.border" class="price-border-text">
                    от
                </span>
                {{ data.price }}
            </p>
        </div>
    </div>
</template> -->

<style>
.service {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.price-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.price-line {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px;
}

.price-border-text {
    opacity: 0.75;
    font-size: 0.8rem;
}

.price {
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    text-align: right;
}

.service-name {
    font-size: 1rem;
    font-weight: 300;
}

.service-description {
    font-size: 0.9rem;
    opacity: 0.75;
}

.price-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 200px;
    /* display: flex;
    justify-content: flex-end; */
    gap: 10px;
}
</style>


<script setup>

defineProps({
    priceData: Array,
    required: true
})


</script>
