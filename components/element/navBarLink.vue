<template>
  <NuxtLink class="navBarElement flex items-center" :to="targetLink">
<Icon :class="isActive(targetLink)"
      class="navBarHeart text-transparent me-2"
      name="gravity-ui:heart-fill" size="1em"/>
    {{ buttonText }}
</NuxtLink>
</template>

<script setup lang="ts">
const {isActive} = useNavigation();

defineProps({
  targetLink: {
    type: String,
    default: '',
  },
  buttonText: String
});
</script>