<script setup lang="ts">
import Button from "./Button.vue";
import { usePhones } from "../stores/usePhones.vue";
import { reactive } from "vue";

const dropdown = reactive({
    openState: false,
});
const toggleDropdown = () => {
    dropdown.openState = !dropdown.openState;
};
const props = defineProps<{
    title: String;
    buttonText: String;
    darkMode: Boolean;
    extendHeader: Boolean;
    footerText: String;
    function: Function;
    sortByPrice: Function;
    sortByRating: Function;
    sortByTitle: Function;
}>();
</script>

<template>
    <div class="card" :class="{ dark: props.darkMode }">
        <div class="card-header" :class="{ extended: props.extendHeader }">
            <h3>{{ props.title }}</h3>
            <div v-if="props.extendHeader" class="d-flex">
                <Button @click="props.function">Refresh list</Button>
                <div
                    class="dropdown"
                    @click="toggleDropdown"
                    :class="{ open: dropdown.openState }"
                >
                    <div class="selected">
                        Order by:
                        <img src="../assets/arrow-bottom.svg" alt="" />
                    </div>
                    <div class="list">
                        <button
                            class="item"
                            @click="props.sortByTitle(usePhones.smartphones)"
                        >
                            - Title
                        </button>
                        <button
                            class="item"
                            @click="props.sortByRating(usePhones.smartphones)"
                        >
                            - Rating
                        </button>
                        <button
                            class="item"
                            @click="props.sortByPrice(usePhones.smartphones)"
                        >
                            - Price
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-content">
            <slot />
        </div>
        <div class="footer">
            <span>{{ props.footerText }}</span>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    margin-bottom: 20px;
    overflow: hidden;
}
.card-header {
    padding: 20px;
}
.card-header h3 {
    margin-bottom: 0;
}
.card-content {
    padding: 0 20px 20px 20px;
    max-height: 400px;
    overflow-y: auto;
}
.card.dark {
    background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ),
        #161e54;
}
.card.dark .card-header {
    background: #1b204a;
}
.card.dark h3 {
    color: #ffffff;
    margin-bottom: 0;
}
.card-header.extended {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

h3 {
    margin-bottom: 22px;
}
.d-flex {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
@media (max-width: 576px) {
    .d-flex {
        flex-direction: column;
        align-items: flex-end;
    }
    .d-flex Button {
        margin-bottom: 6px;
    }
}
Button {
    max-width: fit-content !important;
}
.selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.dropdown {
    width: 150px;
    position: relative;
    z-index: 10;
    margin-left: 16px;
    border-radius: 4px;
    border: 1px solid #efefef;
    background: #fff;
    cursor: pointer;
}
.dropdown.open .list {
    display: block;
}
.dropdown .list {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 102%;
    width: 100%;
    background-color: #ffffff;
}
.dropdown .list .item {
    display: block;
    width: 100%;
    min-width: 100%;
    background-color: #ffffff;
    border: none;
    outline: none;
    padding: 8px;
    text-align: left;
    cursor: pointer;
}
.footer {
    padding: 12px;
    text-align: center;
}
.footer span {
    color: #ff5151;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
}
@media screen and (max-width: 1440px) {
    .card {
        max-height: 600px;
    }
}
</style>
