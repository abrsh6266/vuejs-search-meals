<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link class="inline-flex items-center px-5" :to="{ name: 'home' }">Home</router-link>
      <div class="flex items-center gap-2">
        <router-link to="/" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">Search by
          meals</router-link>
        <router-link to="/" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">meals by
          letter</router-link>
        <router-link to="/" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">Meals by
          ingredients</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup>

</script>
<style scoped></style>
