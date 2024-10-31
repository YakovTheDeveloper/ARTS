<template>
    <section class="card">
        <div class="card-inner">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name='footer'></slot>
        </div>
    </section>
</template>

<style scoped>
.card {
    /* min-height: 100vh; */
    width: 100%;

    /* background: #ffffff; */
    /* border-radius: 45px; */
    /* margin-top: 30px; */
    margin-bottom: 50px;

    /* -webkit-box-shadow: 1px 1px 50px 0px rgba(0, 0, 0, 0.03);
    -moz-box-shadow: 1px 1px 50px 0px rgba(0, 0, 0, 0.03);
    box-shadow: 1px 1px 50px 0px rgba(0, 0, 0, 0.03); */
}

.card-inner {
    width: 100%;
    max-width: var(--content-width);
    height: 100%;
    padding: 40px var(--container-padding) 30px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    /* gap: 65px; */
}

.card-footer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
</style>