<template>
    <div class="order-button-container">
        <!-- <button class="order-button">
            записаться
        </button> -->
        <div class="textContainer" aria-hidden="true">
            <svg width="200" height="100" class="question">
                <defs>
                    <path id="curve" d="M 10,50 Q 40,-30 190,50" fill="transparent" />
                </defs>
                <text fill="black" font-size="14" font-weight="600" font-family='"Montserrat", sans-serif'>
                    <textPath href="#curve">
                        записаться
                    </textPath>
                </text>
                <defs>
                    <path id="curve2" d="M 30,50 Q 1800,-120 190,50" fill="transparent" />
                </defs>
                <text fill="black" font-size="12" font-weight="600" font-family='"Montserrat", sans-serif'>
                    <textPath href="#curve2">
                        задать вопрос

                    </textPath>
                </text>

            </svg>
        </div>
    </div>
</template>

<style scoped>
.order-button-container {
    position: fixed;
    bottom: 20px;
    right: 40px;
    height: 100px;
    /* Height for button */
    background-color: rgba(255, 255, 255, 0.45);
    width: 100px;
    border-radius: 50%;
    /* overflow: hidden; */
    /* Width for button */
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.6);

    &:hover {
        /* transform: translateY(1px); */
        background-color: rgba(255, 255, 255, 0.815);
        transform: translateX(-10%);
        border-color: var(--color-white);
    }
}

.order-button {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    /* Round button */
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 100%;
    /* Full height */
    width: 100%;
    /* Full width */
    position: relative;
    font-weight: 300;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    /* For absolute positioning of text */
}

.textContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 10px;
}

.question {
    position: absolute;
    bottom: -50%;
    left: -15%;
    transform: rotate(30deg);
}

@keyframes rotate {
    from {
        transform: rotate(0deg) rotateX(20deg) rotate(720deg);
    }

    to {
        transform: rotate(360deg) rotateX(20deg) rotate(0deg);
    }
}
</style>

<script setup>
</script>
