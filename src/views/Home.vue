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
import { computed } from 'vue';
import store from '../store';

const letters = 'ABCDEFGHIJKLMNOPQRSTYVWXYZ'.split('')
const url = 'www.themealdb.com/api/json/v1/1/list.php?i=list'
</script>


<style></style>