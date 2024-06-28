<template>
    <div>
        <div class="p-8 pb-0">
            <input v-model="keyword" @change="searchMeals" type="text" placeholder="Search fo meals"
                class="w-full rounded border-2 bg-gray-200">

        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
            <div v-for="meal of meals" :key="meal.isMeal" class="bg-white shadow rounded-xl">
                <router-link to="/">
                    <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl object-cover h-48 w-full">
                </router-link>
                <div class="px-3">
                    <h3 class="font-bold">{{ meal.strMeal }}</h3>
                    <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae hic vel deleniti
                        non</p>
                    <div class="flex items-center justify-between">
                        <a :href="meal.strYoutube" target="_blank"
                            class="px-3 py-2 rounded-md border-2 hover:bg-red-600 bg-red-500 border-red-600 text-white transition-colors mb-2">Youtube</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)

const searchMeals = () => {
    store.dispatch('searchMeals', keyword.value)
}
onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals();
    }
})
</script>

<style></style>