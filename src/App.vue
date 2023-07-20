<script setup lang="ts">
import { onMounted } from "vue";
import { useJobs } from "./stores/useJobs.vue";
import { usePhones } from "./stores/usePhones.vue";
import getRequest from "./composables/useFetch.ts";
import JobsCard from "./components/JobsCard.vue";
import Sidebar from "./components/Sidebar.vue";
import Button from "./components/Button.vue";
import SearchInput from "./components/SearchInput.vue";
import SmartphoneCard from "./components/SmartphoneCard.vue";
import WrapperCard from "./components/WrapperCard.vue";
import RecentActivity from "./components/RecentActivity.vue";
interface PhoneData {
    title: string;
    description: string;
    price: number;
    rating: number;
    pinnable: boolean;
}
interface ResponseData {
    products: PhoneData[];
}
const getPhones = () => {
    getRequest<ResponseData>(
        "https://dummyjson.com/products/category/smartphones"
    ).then((response) => {
        usePhones.smartphones = response.data.products;
    });
};
const getSchedule = () => {
    getRequest<ResponseData>(
        "https://dummyjson.com/products/category/smartphones"
    ).then((response) => {
        usePhones.schedule = response.data.products;
    });
};
onMounted(() => {
    getPhones();
    getSchedule();
});

const sortByTitleHandler = (array: Array<PhoneData>) => {
    var byTitle = array.slice(0);
    byTitle.sort(function (a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    usePhones.smartphones = byTitle;
};
const sortByPriceHandler = (array: Array<PhoneData>) => {
    let byPrice = array.slice(0);
    byPrice.sort(function (a, b) {
        var x = a.price;
        var y = b.price;
        return x < y ? -1 : x > y ? 1 : 0;
    });

    usePhones.smartphones = byPrice;
};

const sortByRatingHandler = (array: Array<PhoneData>) => {
    let byRating = array.slice(0);
    byRating.sort(function (a, b) {
        var x = a.rating;
        var y = b.rating;
        return x > y ? -1 : x < y ? 1 : 0;
    });

    usePhones.smartphones = byRating;
};
</script>

<template>
    <div class="flex-container">
        <Sidebar />
        <main>
            <header>
                <div class="header__navigation">
                    <button class="hamburger">
                        <img src="./assets/hamburger.svg" alt="Menu" />
                    </button>
                    <SearchInput />
                </div>

                <div class="header__accont-wrapper">
                    <button class="account-button">
                        <img src="./assets/notifications.svg" alt="" />
                    </button>
                    <button class="account-button">
                        <img src="./assets/chat.svg" alt="" />
                    </button>
                    <img src="./assets/user.svg" alt="" />
                    <div class="user-dropdown">
                        <span>Admirra John</span>
                        <img src="./assets/arrow-bottom.svg" alt="" />
                    </div>
                </div>
            </header>
            <h1 class="page-title">Dashboard</h1>
            <div class="main--left">
                <div class="stats-wrapper">
                    <JobsCard
                        v-for="item in useJobs.jobs"
                        :title="item.title"
                        :description="item.description"
                        :count="item.count"
                        :descriptionCount="item.descriptionCount"
                        :hexPrimary="item.hexPrimary"
                        :hexSecondary="item.hexSecondary"
                        v-bind:key="item.id"
                    />
                </div>
                <div class="stats-wrapper">
                    <img src="./assets/TotalEmployees.svg" alt="" />
                    <img src="./assets/TotalRequest.svg" alt="" />
                </div>
                <WrapperCard
                    :title="'Announcement'"
                    :extendHeader="true"
                    :function="
                        () => {
                            getPhones();
                        }
                    "
                    :sort-by-price="sortByPriceHandler"
                    :sort-by-rating="sortByRatingHandler"
                    :sort-by-title="sortByTitleHandler"
                    :footer-text="'See All Announcement'"
                >
                    <SmartphoneCard
                        v-for="phone in usePhones.smartphones"
                        :title="phone.title"
                        :description="phone.description"
                        :price="phone.price"
                        :rating="phone.rating"
                        :pinnable="true"
                    />
                </WrapperCard>
            </div>
            <div class="main--right">
                <RecentActivity />

                <WrapperCard
                    :title="'Upcoming Schedule'"
                    :footer-text="'Creat a New Schedule'"
                >
                    <SmartphoneCard
                        v-for="(phone, index) in usePhones.schedule"
                        :heading="'Prior'"
                        :title="phone.title"
                        :description="phone.description"
                        :price="0"
                        :rating="0"
                        ><h2 v-if="index < 1">Priority</h2>
                        <h2 v-if="index === 1">Other</h2>
                    </SmartphoneCard>
                </WrapperCard>
            </div>
        </main>
    </div>
</template>

<style scoped>
header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
    height: 60px;
    margin-bottom: 32px;
    padding-left: 20px;
    padding-right: 20px;
}
.header__navigation {
    display: flex;
    align-items: center;
}
.hamburger {
    display: block;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 32px;
}
.header__accont-wrapper {
    display: flex;
    align-items: center;
}
.account-button {
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 30px;
    cursor: pointer;
}
.user-dropdown {
    display: flex;
    cursor: pointer;
}
.user-dropdown span {
    padding: 0 16px;
    display: none;
}
main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.page-title {
    margin-bottom: 24px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
}
.main--left {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
}
.main--right {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
}
.stats-wrapper img {
    display: block;
    width: 100%;
    margin-bottom: 20px;
}
@media screen and (min-width: 834px) {
    .page-title,
    .main--left,
    .main--right {
        padding-left: 52px;
        padding-right: 52px;
    }
    .main--right {
        display: flex;
        width: 100%;
    }
    .main--left {
        padding-bottom: 62px;
    }
    .stats-wrapper {
        display: flex;
    }
    .stats-wrapper {
        display: flex;
    }
    .stats-wrapper img:first-child {
        display: block;
        width: calc(50% - 8px);
        margin-right: 8px;
    }

    .stats-wrapper img:nth-child(2) {
        display: block;
        width: calc(50% - 8px);
        margin-left: 8px;
    }
}
@media screen and (min-width: 1440px) {
    header {
        padding: 0 52px;
        height: 90px;
    }
    .page-title {
        padding: 0 52px;
    }
    .main--left {
        width: 60%;
        padding-right: 15px;
        padding-left: 52px;
    }
    .main--right {
        display: block;
        width: 40%;
        padding-left: 15px;
        padding-right: 52px;
    }
    .user-dropdown span {
        display: block;
    }
}
</style>
./stores/useJobs.ts/index.ts
