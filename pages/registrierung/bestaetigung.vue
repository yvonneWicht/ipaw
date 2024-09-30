<script setup>
const {formData} = useValidation();

useHead({
  title: 'KleiderHerz - Danke!',
})
</script>

<template>
  <div id="topImage" class="relative">
    <img src="@/assets/images/confirmation-landingpage.jpg" class="w-screen pb-9 hidden md:block">
    <img src="@/assets/images/confirmation-landingpage-mobile.jpg" class="w-screen pb-9 md:hidden">
    <div class="absolute inset-y-1/2 xl:inset-x-60 md:inset-x-40 inset-x-10">
      <h1 class="inline-block bg-orange-400 text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-2">
        Danke {{ formData.firstName }}
      </h1><br>
      <h1 class="inline-block bg-orange-400 text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-2">
        für deine Hilfe.
      </h1>
    </div>
  </div>
</template>
