<template>
    <section class="team">
        <figure v-for="(member) in people" class="member">
            <div class="member-photo-part">
                <p class="member-name">
                    {{ member.name }}
                    <!-- <span>
                        {{ member.label }}
                    </span> -->
                </p>
                <div class="photo-container">
                    <NuxtImg :src="member.imgSrc" alt="Image" class="photo" />
                </div>
            </div>
            <figcaption class="caption">
                {{ member.label }}
            </figcaption>
        </figure>
    </section>
</template>

<style scoped>
.team {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-rows: repeat(auto-fit, minmax(440px, 1fr)); */
    /* Adjust 200px as needed */
    gap: 60px var(--items-gap);
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

.member {
    /* height: 100%; */
    flex-shrink: 0;
    flex-grow: 0;
    min-width: 200px;
}

.member-photo-part {
    height: min(65vh, 650px);
    padding: 20px;
    position: relative;
    background-color: rgb(103, 138, 138);
    box-shadow: var(--human-card-box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &:hover {
        cursor: pointer;
        transform: translate(0px, 2px);

        -webkit-box-shadow: var(--box-shadow-card-hover);
        -moz-box-shadow: var(--box-shadow-card-hover);
        box-shadow: var(--box-shadow-card-hover);
    }


}

.member-name {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    width: 100%;
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
    z-index: 1;
    text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 1px;

    @media (max-width: 480px) {
        font-size: 1.6rem;
        font-weight: 500;
    }
}

.photo-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

.photo {
    object-fit: cover;
    position: relative;
    height: 100%;
    width: 100%;
}

.caption {
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    margin-top: var(--container-padding);
    text-align: center;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        font-family: 'Montserrat', sans-serif;
        margin-top: calc(var(--container-padding) * 1.5);
        padding-right: 20px;
        text-align: right;

    }
}
</style>

<script setup>
defineProps({
    people: Array,
    required: true
})

</script>