<script setup lang="ts">
defineProps({
  desktopImage: String,
  mobileImage: String,
  headline1: String,
  headline2: String
});

</script>

<template>
  <div id="topImage" class="relative">
    <img class="w-screen pb-9 hidden sm:block" :src="desktopImage">
    <img class="w-screen pb-9 sm:hidden" :src="mobileImage">
    <div class="absolute inset-y-1/2 xl:inset-x-60 sm:inset-x-40 inset-x-10">
      <h1 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
        <span class="inline-block bg-orange-400 p-2">{{ headline1 }}</span><br>
        <span class="inline-block bg-orange-400 p-2">{{ headline2 }}</span>
      </h1>
    </div>
  </div>
</template>