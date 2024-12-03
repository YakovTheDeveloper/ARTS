<template>
    <div class="our-work">
        <Typo variant="h1" align="right">
            Наши работы
        </Typo>
        <div class="photo-container">
            <img :src="data[0].src" alt="Slider Image" class="photo" @click="openModal" />
        </div>

        <!-- <Modal :isVisible="isModalVisible" :imageSrc="selectedImage" @close="closeModal">
            <div class="modal-photo-container">
                <button v-show="!isFirst" :class="['control-button', 'control-button-left']" @click="prevImage">
                    < </button>
                        <img :src="currentImage.src" alt="Slider Image" class="photo" @click="nextImage" />
                        <button :class="['control-button', 'control-button-right']" @click="nextImage">></button>
            </div>
        </Modal> -->

    </div>
</template>

<style scoped>
.our-work {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--items-gap);
}

.photo-container {
    max-height: 400px;
    background-color: rgb(79, 77, 76);
    position: relative;
    overflow: hidden;
    border-radius: 15px;


}

.photo-container:hover .control-button {
    opacity: 1;
}

.photo {
    /* Adjust based on your needs */
    /* Maximum width */
    min-height: 100%;
    object-fit: contain;
    /* Maintain aspect ratio */
}

.modal-photo-container {
    position: relative;

    &:hover .control-button {
        opacity: 1;
    }
}

.control-button {
    transition: opacity 0.2s;
    opacity: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 3rem;
    top: 0;
    position: absolute;
    height: 100%;
    background-color: rgba(96, 96, 96, 0.3);
    border: none;
    width: 10%;
    z-index: 1001;
}

.control-button-left {
    left: 0;
}

.control-button-right {
    right: 0;
}
</style>

<script setup>
import { ref } from 'vue';
import OrderButton from '~/components/common/OrderButton.vue';

const isModalVisible = ref(false);
const selectedImage = ref('');

const openModal = (imageSrc) => {
    // selectedImage.value = imageSrc;
    // isModalVisible.value = true;
};

const closeModal = () => {
    isModalVisible.value = false;
};

const currentIndex = ref(0);

// Function to go to the next image
const nextImage = () => {
    if (currentIndex.value < data.length - 1) {
        currentIndex.value++;
    } else { currentIndex.value = 0 }
};

// Function to go to the previous image
const prevImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

const currentImage = computed(() => data[currentIndex.value]);

const isFirst = computed(() => data[currentIndex.value].src === data[0].src);

const data = [
    {
        src: 'images/mock1.jpg',
    },
    {
        src: 'images/mock2.jpg',
    },
];

</script>