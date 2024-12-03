<template>
    <section class="team-carousel">
        <swiper :slides-per-view="slidesPerView" :space-between="20" :breakpoints="computedBreakpoints" navigation
            :pagination="{ clickable: true }" :modules="modules" class="my-swiper">
            <swiper-slide v-for="(member, index) in people" :key="index" class="swiper-slide">
                <figure class="member">
                    <div class="member-photo-part">
                        <div class="photo-container">
                            <NuxtImg :src="member.imgSrc" alt="Image" class="photo" />
                        </div>
                    </div>
                    <figcaption class="caption">
                        <Typo v-if="member.label" variant="h3">{{ member.label }}</Typo>
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
import { computed } from 'vue';

// Define props in the <script setup> context
const props = defineProps({
    people: {
        type: Array,
        required: true
    }
});

const modules = [Navigation, Pagination];

// Computed property to calculate the number of slides per view
const slidesPerView = computed(() => {
    // Force one slide per screen for mobile, and adapt for other screen sizes
    return 1; // Always show 1 slide on mobile
});

// Computed property to calculate breakpoints dynamically based on the number of slides
const computedBreakpoints = computed(() => {
    return {
        640: { slidesPerView: 1, spaceBetween: 20 }, // 1 slide for mobile devices
        768: { slidesPerView: 2, spaceBetween: 30 }, // 2 slides for medium screens
        1024: { slidesPerView: 3, spaceBetween: 30 } // 3 slides for large screens
    };
});
</script>


<style scoped>
.team-carousel {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.member {
    flex-shrink: 0;
    user-select: none;
}

.member-name {}

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
    position: relative;
    background-color: rgb(103, 138, 138);
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.caption {
    font-size: 0.8rem;
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