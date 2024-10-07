<template>
  <label :for="id">{{ label }}</label>
  <div class="text-red-700">{{ errorMessage }}</div>
  <select :name="name" :id="id" :class="{'border-red-600 border-2': errorMessage}"
          class="bg-orange-100 h-12 px-3" v-on="handlers" :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)">
    <option value="" selected disabled>Bitte auswählen</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
  mode: {
    type: String,
    default: 'passive',
  },
  label: String,
  modelValue: String,
});

const {meta, value, errorMessage, handlers} = useFieldHandlers(props, modes);
</script>
