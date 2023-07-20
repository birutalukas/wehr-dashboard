<script setup lang="ts">
interface Props {
    title: string;
    description: string;
    count: number;
    descriptionCount: number;
    hexPrimary: string;
    hexSecondary: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    description: "",
    count: 0,
    descriptionCount: 0,
    hexPrimary: "#ffffff",
    hexSecondary: "#000000",
});
</script>

<template>
    <div
        class="job-card"
        :style="{
            'background-color': props.hexSecondary,
        }"
    >
        <h2>{{ props.title }}</h2>
        <h3>{{ props.count }}</h3>
        <span :style="{ color: props.hexPrimary }"
            >{{ props.descriptionCount }} {{ props.description }}</span
        >
    </div>
</template>

<style scoped>
.job-card {
    border-radius: 10px;
    flex: 1;
    padding: 16px 20px;
    min-height: 140px;
    margin-bottom: 16px;
}
h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}
h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 28px;
    margin: 16px 0;
}
@media screen and (min-width: 834px) {
    .job-card {
        padding: 12px 20px;
        margin-right: 14px;
        margin-bottom: 20px;
    }
    .job-card:last-child {
        margin-right: 0;
    }
}
@media screen and (min-width: 1440px) {
    h2 {
        font-size: 18px;
        line-height: 28px;
    }
    h3 {
        font-size: 36px;
    }
}
</style>
