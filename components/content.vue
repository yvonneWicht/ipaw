<template>
  <div :class="contentBackground ? 'bg-[#fac8a2] py-4 mb-9' : ''">
  <div class="max-w-screen-xl mx-auto">
    <h2 class="inline-block bg-orange-100 font-bold text-2xl md:text-4xl text-orange-400 p-2 mb-4 mx-2">
      {{ contentHeadline }}
    </h2>
    <p v-if="$slots.basicText" class="text-lg px-2 pb-9 mx-2">
      <slot name="basicText">
      </slot>
    </p>
    <slot name="additionalContent">
    </slot>
  </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  contentHeadline: String,
  contentBackground: {
    type: Boolean,
    default: false,
  },
});
</script>