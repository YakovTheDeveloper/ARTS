<template>
    <header class="price-description">
        <div class="price-container" v-show="priceData.priceVariants">
            <span class="price-cell price-cell-heading" v-for="(variant) in priceData.priceVariants">
                {{ variant }}
            </span>
        </div>
    </header>
    <div class="price-list">
        <div v-for="(data, index) in priceData.content" :key="index" class="line">
            <div class="service" @click="openModal(data)">
                <p class="service-name">{{ data.displayName }}</p>
                <p v-show="data.description" class="service-description">{{ data.description }}</p>
            </div>
            <div class="price-container">
                <p class="price-cell">
                    <span class="price-border-text">
                        {{ data.border }}
                    </span>
                    {{ data.price }}
                </p>
                <p class="price-cell" v-if="data.price2">
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
                <OrderButton />
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
    gap: 30px;
    /* @media (max-width: 575.98px) {
        --root-font-size: 15px;
        --items-gap: 15px;
        --card-grid: 1fr;
        --container-padding: 10px;
        --our-brands-height: 25px;
        --human-card-box-shadow: none;
        --offset-typo-h1: 1.5rem;
    } */

}

.price-header {
    display: flex;
    justify-content: space-between;
}

.price-description {
    width: 200px;
    min-height: 40px;
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

.price-border-text {
    opacity: 0.75;
    font-size: 0.8rem;
    width: 2ch;
    display: inline-block;
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
    /* width: 200px; */
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.price-cell.price-cell-heading {
    font-weight: 200;
    font-style: italic;
    font-size: 1rem;
    white-space: wrap;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 575.98px) {
        font-size: 0.8rem;
    }
}

.price-cell {
    /* width: 49%; */
    width: 90px;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    text-align: right;

    &:first-child {
        /* text-align: left; */
    }

    &:first-child:only-child {
        text-align: right;
    }

    @media (max-width: 575.98px) {
        width: 70px
    }

}

.price-cell-value {}
</style>


<script setup>
import Card from '~/components/Card.vue';
import OrderButton from '~/components/common/OrderButton.vue';
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
