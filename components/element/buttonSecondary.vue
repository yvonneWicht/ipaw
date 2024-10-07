<template>
  <NuxtLink :to="targetLink">
    <button
        class="rounded-full border-2 border-orange-400 bg-orange-100 px-5 py-3 text-xl font-semibold text-orange-400 uppercase
            hover:border-orange-600 hover:text-orange-600 active:border-orange-700 active:text-orange-700">
      {{ buttonText }}
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  targetLink: {
    type: String,
    default: '',
  },
  buttonText: String
});
</script>