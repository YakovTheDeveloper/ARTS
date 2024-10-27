<template>
    <component :is="tag" :href="isLink ? to : null" :class="['base-button', buttonType, { 'is-disabled': isDisabled }]"
        :disabled="isDisabled && !isLink" @click="handleClick" v-bind="attrs">
        <slot />
    </component>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    to: { type: String, default: null },          // URL for link buttons
    type: { type: String, default: 'button' },    // Button type: button, submit, or reset
    variant: { type: String, default: 'primary' },// Style variant: primary, secondary, etc.
    isDisabled: { type: Boolean, default: false } // Disable the button
});

const emits = defineEmits(['click']);

const isLink = computed(() => Boolean(props.to)); // Checks if the button is a link
const tag = computed(() => (isLink.value ? 'a' : 'button')); // Dynamically choose between <a> and <button>

// Compute the CSS class based on the variant
const buttonType = computed(() => `base-button--${props.variant}`);

function handleClick(event) {
    if (props.isDisabled) {
        event.preventDefault();
    } else {
        emits('click', event);
    }
}
</script>

<style scoped>
/* Base button styles */
.base-button {
    font-family: 'Montserrat', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
}

.base-button.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

/* Example styling for different variants */
.base-button--primary {
    background-color: transparent;
    border: 1px solid white;
    color: #fff;
}

.base-button--primary:hover:not(.is-disabled) {
    background-color: rgba(94, 94, 94, 0.479);
}

.base-button--secondary {
    color: #000000;
    border: 1px solid black;
    background-color: white;
}

.base-button--secondary:hover:not(.is-disabled) {
    background-color: white;
    opacity: 0.6;
}
</style>