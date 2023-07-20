<script setup lang="ts">
const props = defineProps({
    heading: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: false },
    rating: { type: Number, required: false },
    price: { type: Number, required: true },
    pinnable: { type: Boolean, required: false },
});
</script>

<template>
    <h2><slot /></h2>

    <div class="card">
        <h3>{{ props.title }}</h3>
        <h4>{{ props.description }}</h4>
        <span v-if="props.price">Price: {{ props.price }}€ </span>
        <br v-if="props.price" />
        <span v-if="props.rating">Rating: {{ props.rating }}</span>

        <div class="card-buttons">
            <button v-if="props.pinnable">
                <img src="../assets/pin.svg" alt="" />
            </button>
            <button>
                <img src="../assets/menu-horizontal.svg" alt="" />
            </button>
        </div>
    </div>
</template>

<style scoped>
button {
    width: 24px;
    height: 24px;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 10px;
    cursor: pointer;
}
.card {
    border-radius: 6px;
    border: 0.5px solid #e0e0e0;
    background-color: #fafafa;
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 8px;
    position: relative;
}
.card-buttons {
    position: absolute;
    right: 16px;
    bottom: 12px;
}
h2 {
    font-size: 12px;
    font-weight: 400;
    line-height: 28px;
    color: #686868;
    margin: 12px 0;
}
h3,
h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
}

h3 {
    font-weight: 500;
}
h4 {
    margin-bottom: 8px;
}
span {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
}
@media screen and (min-width: 834px) {
    .card {
        padding-right: 150px;
    }
    h3,
    h4 {
        font-size: 15px;
        line-height: 24px;
    }
    .card-buttons {
        top: 50%;
        bottom: unset;
        transform: translateY(-50%);
    }
}

@media screen and (min-width: 1440px) {
    h3,
    h4 {
        font-size: 16px;
    }
}
</style>
