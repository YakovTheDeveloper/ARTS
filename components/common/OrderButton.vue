<template>
    <Link to="order" class="order">
    записаться
    </Link>
</template>


<script setup>
import Button from '~/components/ui/Button.vue';
import Link from '~/components/ui/Link.vue';


const props = defineProps({
    openModal: {
        type: Function,
    }
})
</script>

<style scoped>
.order {
    font-style: italic;
}
</style>