<!-- eslint-disable -->
<template>
  <component :is="config[props.name]" :width="props.width" :height="props.height" />
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import Group8612 from './Group8612.vue';

const props = defineProps<{
  name:
    | 'Group8612'
  ;
  width?: string | number;
  height?:string | number
}>();

const config = {
  'Group8612': Group8612,
};
</script>