<template>
    <component :is="tag" :class="computedClasses">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const variantToTag: Record<string, string> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    caption: 'p',
    link: 'p',
    subtitle: 'p', // Add subtitle variant
}

const props = defineProps({
    variant: {
        type: String,
        default: 'body',
        validator: (value: string) => {
            return ['h1', 'h2', 'body', 'caption', 'subtitle'].includes(value); // Include subtitle in validator
        },
    },
    color: {
        type: String,
        default: 'black',
    },
    offset: {
        type: Boolean,
    },
    align: {
        type: String,
        default: 'left',
        validator: (value: string) => {
            return ['left', 'center', 'right'].includes(value);
        },
    },
});

const tag = variantToTag[props.variant]

// Compute the CSS classes based on the props
const computedClasses = computed(() => {
    return [
        `typo--${props.variant}`,
        `typo--color-${props.color}`,
        `${props.align}`,
        `${props.offset ? 'offset' : ''}`
    ];
});
</script>

<style scoped>
.typo--h1 {
    font-size: var(--typo-h1);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
}

.typo--h2 {
    font-size: 2em;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
}

.typo--h3 {
    font-size: 1.3em;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
}

.typo--body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
}

.typo--caption {
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
}

.typo--subtitle {
    /* Add subtitle styles */
    font-size: 2.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: #6c757d;
    /* A lighter grey color for subtitles */
    /* Slightly increased line height for readability */
}

.typo--color-white {
    color: #ffffff;
}

.typo--color-black {
    color: rgb(10, 10, 10);
}

.typo--color-black-2 {
    color: rgb(10, 10, 10);
}

.typo--link {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
}

.typo--color-red {
    color: red;
}


.typo--color-orange {
    color: orange;
}

.typo--color-blue {
    color: blue;
}

.left {
    text-align: left;
}

.center {
    text-align: center;
}

.right {
    text-align: right;
}

.offset.typo--h1 {
    margin-bottom: var(--offset-typo-h1);
}

/* Add more colors and styles as needed */
</style>
