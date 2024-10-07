<template>
  <label :for="id">{{ label }}</label>
  <input :name="name" :id="id" :class="{'border-red-600 border-2': errorMessage}"
         class="bg-orange-100 h-12 px-3" :type="inputType" v-on="handlers" :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"/>
  <div class="text-red-700">{{ errorMessage }}</div>
</template>

<script setup lang="ts">
import {modes} from '@/composables/interactionModes';
import {useFieldHandlers} from '@/composables/useFieldHandlers';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  inputType: {
    type: String,
    default: 'text',
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
