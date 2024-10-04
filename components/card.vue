<script setup lang="ts">
defineProps({
  imageSrc: String,
  headline: String
});
</script>

<template>
  <div class="mx-2 md:mx-0">
    <slot name="image">
  <img class="w-100" :src="imageSrc">
    </slot>
  <div class="bg-orange-100 uppercase rounded-b-xl p-5">
    <h3 class="font-bold text-4xl text-orange-400 pb-5">
      <slot name="header">
        {{ headline }}
      </slot>
    </h3>
    <button class="rounded-full py-3 px-5 bg-orange-400 hover:bg-orange-600 active:bg-orange-700 uppercase text-white font-semibold text-xl">
    <slot name="targetLink"><NuxtLink to="/spendenregionen">Mehr</NuxtLink></slot></button>
  </div>
  </div>
</template>