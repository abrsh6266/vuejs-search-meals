<template>
    <div class="flex flex-col p-8">
        <input type="text" placeholder="search fo meals" class="w-full rounded border-2 bg-gray-200">
        <div class="flex gap-2 mt-2 justify-center">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTYVWXYZ'.split('')
const ingredients = ref([])
onMounted(async () => {
    const response = await axiosClient.get('list.php?i=list')
    ingredients.value = response.data
    console.log(response)
})
</script>


<style></style>