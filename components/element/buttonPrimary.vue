<template>
  <NuxtLink :to="targetLink">
    <button
        class="rounded-full bg-orange-400 hover:bg-orange-600 active:bg-orange-700 py-3 px-5 text-white font-semibold text-xl uppercase">
      {{ buttonText }}
    </button>
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps({
  targetLink: String,
  buttonText: String
});
</script>