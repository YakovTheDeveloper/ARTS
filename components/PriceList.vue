<template>
    <div class="price-list">

        <header class="price-description" v-show="priceData.priceVariants">
            <div class="price-container">
                <span class="price-cell price-cell-heading" v-for="(variant) in priceData.priceVariants">
                    {{ variant }}
                </span>
            </div>
        </header>

        <div v-for="(data, index) in priceData.content" :key="index" class="line">
            <div class="service" @click="openModal(data)">
                <p class="service-name">{{ data.displayName }}</p>
                <p v-show="data.description" class="service-description">{{ data.description }}</p>
            </div>
            <div class="price-container">
                <p class="price-cell" v-show="data.price">
                    <span v-show="data.border" class="price-border-text">
                        {{ data.border }}
                    </span>
                    {{ data.price }}
                </p>
                <p class="price-cell" v-show="data.price2">
                    <span v-show="data.border" class="price-border-text">
                        {{ data.border }}
                    </span>
                    {{ data.price2 }}
                </p>
            </div>
        </div>
    </div>
    <Modal :isVisible="isModalVisible" @close="closeModal">
        <div class="modal-service">
            <Card>
                <Typo variant="h2" align="center" offset>Записаться</Typo>
                <Typo variant="h2" align="center">{{ selectedService?.description }}</Typo>
                <ServiceSignUpForm />
            </Card>
        </div>
    </Modal>
</template>

<style scoped>
.service {
    display: flex;
    flex-direction: column;
    gap: 5px;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
}

.price-list {
    display: flex;
    flex-direction: column;
    gap: var(--items-gap);
}

.price-header {
    display: flex;
    justify-content: space-between;
}

.price-description {
    width: 200px;
    margin-left: auto;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    display: flex;
    justify-content: flex-end;
}


.line {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px;
    position: relative;
    /* padding: 0 0 15px; */
    transition: none;

    &:hover {
        /* color: white; */
    }



}

.line:first-child {
    padding-top: 0;
}

/* .line:hover:before{
    opacity: 1;
}

.line:before{
    transition: all 0.1s ease-in-out;
    content: '';
    width: 100%;
    opacity: 0;
    height: 1px;
    background-color: rgb(216, 216, 216);
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
} */

.price-border-text {
    opacity: 0.75;
    font-size: 0.8rem;
}

.service-name {
    font-size: 1.1rem;
    font-weight: 300;
}

.service-description {
    font-size: 0.9rem;
    opacity: 0.75;
}

.price-container {
    width: 200px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.price-cell.price-cell-heading {
    font-weight: 200;
    font-style: italic;
    font-size: 1rem;
    white-space: wrap;
}

.price-cell {
    width: 49%;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    text-align: right;
}

.price-cell-value {}
</style>


<script setup>
import Card from '~/components/Card.vue';
import ServiceSignUpForm from '~/components/form/ServiceSignUpForm.vue';


const isModalVisible = ref(false);
const selectedService = ref(null);

const openModal = (service) => {
    selectedService.value = service;
    isModalVisible.value = true;
};

const closeModal = () => {
    selectedService.value = null;
    isModalVisible.value = false;
};

const acceptService = () => {

}

const style = computed(() => {
    // props.priceData
    return {
        'grid-template-columns': '1fr 1fr'
    }
})

defineProps({
    priceData: Array,
    required: true
})


</script>
