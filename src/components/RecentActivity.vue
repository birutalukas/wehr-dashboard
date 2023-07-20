<script setup lang="ts">
import Button from "./Button.vue";
import WrapperCard from "./WrapperCard.vue";
</script>
<template>
    <WrapperCard :title="'Recently Activity'" :darkMode="true">
        <span>10.40 AM, Fri 10 Sept 2021</span>
        <h2>You Posted a New Job</h2>
        <p>
            Kindly check the requirements and terms of work and make sure
            everything is right.
        </p>
        <div class="d-flex">
            <h3>Today you makes 12 Activity</h3>
            <Button>See All Activity</Button>
        </div>
    </WrapperCard>
</template>

<style scoped>
.d-flex {
    display: flex;
    flex-direction: column;
}
span {
    font-size: 10px;
    font-weight: 500;
    color: #ffffff;
    opacity: 0.6;
    margin-top: 16px;
    display: block;
}
h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #ffffff;
    margin: 12px 0;
}
h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 12px;
}
p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #ffffff;
    opacity: 0.8;
    margin-bottom: 32px;
}
Button {
    max-width: 146px;
}
@media screen and (min-width: 834px) {
}
@media screen and (min-width: 1440px) {
    .d-flex {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h3 {
        margin-bottom: 0;
    }
}
</style>
