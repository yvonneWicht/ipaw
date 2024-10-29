<template>
  <div class="mx-2 md:mx-0 pb-4">
    <img class="w-100" :src="imageSrc">
    <div class="bg-orange-100 p-5 uppercase rounded-b-xl">
      <h3 class="text-orange-400 font-bold text-4xl pb-5">
        {{ headline }}
      </h3>
      <ElementButtonPrimary
          :targetLink="targetLink"
          :buttonText="buttonText">
      </ElementButtonPrimary>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageSrc: String,
  headline: String,
  targetLink: String,
  buttonText: String
});
</script>