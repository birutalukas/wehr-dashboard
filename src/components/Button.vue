<script setup lang="ts">
interface Props {
    modification?: string;
}

const props = withDefaults(defineProps<Props>(), {
    modification: "primary",
});
</script>
<template>
    <button :class="props.modification"><slot></slot></button>
</template>

<style scoped>
button {
    display: block;
    border-radius: 4px;
    outline: none;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 10px 16px;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.87, 0, 0.13, 1);
    width: 230px;
    max-width: 100%;
}
button.primary {
    background-color: #ff5151;
    border: 2px solid #ff5151;
    color: #ffffff;
    font-size: 14px;
}
button.primary:hover {
    box-shadow: 0px 4px 12px 0px rgba(255, 81, 81, 0.2);
}
button.primary:active {
    background-color: #f64848;
    border: 2px solid #ff6262;
}
button.primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
