<template>
    <div class="order-button-container">
        <button class="order-button">
            <span>записаться или</span>
            <span>задать вопрос</span>
        </button>
    </div>
</template>



<style scoped>
.order-button-container {
    position: fixed;
    bottom: 10px;
    right: 10px;
}

.order-button{
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-left: none;
    border-right: none;

    font-family: 'Montserrat', sans-serif;
    background-color: transparent;

    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    
}
</style>

<script setup>
// defineProps({
//     onClick
// })
</script>