<template>
  <label class="custom-checkbox flex cursor-pointer" :for="id">
    <input :name="name" :id="id" class="absolute invisible" type="checkbox" v-on="handlers" :checked="modelValue"
           @input="$emit('update:modelValue', $event.target.checked)"/>
    <span class="checkmark me-2 inline-block w-6 h-6 aspect-square relative bg-orange-100"></span>
    <Icon v-if="modelValue" class="absolute text-orange-400"
          name="gravity-ui:check" size="1.4em"/>
    {{ label }}
  </label>
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
  mode: {
    type: String,
    default: 'passive',
  },
  label: String,
  modelValue: {
    type: Boolean,
    default: false,
  }
});

const {meta, value, errorMessage, handlers} = useFieldHandlers(props, modes);
</script>
