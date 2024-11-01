<template>
    <section class="team-carousel">
        <swiper :slides-per-view="1" :space-between="20" :breakpoints="{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
        }" navigation :pagination="{ clickable: true }" :modules="modules" class="my-swiper">
            <swiper-slide v-for="(member, index) in people" :key="index" class="swiper-slide">
                <figure class="member">
                    <div class="member-photo-part">
                        <div class="photo-container">
                            <NuxtImg :src="member.imgSrc" alt="Image" class="photo" />
                        </div>
                        <!-- <Typo v-if="member.name" class="member-name">{{ member.name }}</Typo> -->
                    </div>
                    <figcaption class="caption">
                        <Typo v-if="member.name" class="member-name" variant="h3">{{ member.name }}</Typo>
                        <Typo>{{ member.label }}</Typo>
                    </figcaption>
                </figure>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

defineProps({
    people: {
        type: Array,
        required: true
    }
});
const modules = [Navigation, Pagination]
</script>

<style scoped>
.team-carousel {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.member {
    flex-shrink: 0;
    min-width: 200px;
    user-select: none;
}

.member-name {
    /* position: absolute;
    bottom: 10px;
    left: 15px; */
    /* display: inline-block; */
    font-style: italic;
}

.photo-container {
    height: 100%;
}

.photo {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.member-photo-part {
    height: min(65vh, 650px);
    /* padding: 20px; */
    position: relative;
    background-color: rgb(103, 138, 138);
    /* box-shadow: var(--human-card-box-shadow); */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.caption {
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    margin-top: var(--container-padding);
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
}
</style>

<style>
:root {
    /* --swiper-pagination-color: red; */
    --swiper-theme-color: rgb(152, 152, 152);
}

.my-swiper {
    padding-bottom: 40px;
    /* Space for pagination dots */
}

.my-swiper:hover {

    .swiper-button-prev,
    .swiper-button-next {
        opacity: 1;
    }
}

.my-swiper .swiper-button-next,
.my-swiper .swiper-button-prev {
    color: #fff;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    /* Change arrow color */
    background-color: rgba(0, 0, 0, 0.5);
    /* Add background color */
    border-radius: 50%;
    /* Make buttons circular */
    width: 40px !important;
    /* Custom size */
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: 18px;
    /* Customize arrow icon size */
}

/* Add hover effect */
.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.8);
    /* Darken background on hover */
}

.swiper-button-next {
    right: 10px;
    /* Adjust button position */
}

.swiper-button-prev {
    left: 10px;
    /* Adjust button position */
}
</style>