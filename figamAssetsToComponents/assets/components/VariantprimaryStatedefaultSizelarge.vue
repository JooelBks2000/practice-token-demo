<!-- eslint-disable -->
<template>
  <svg viewBox="0 0 128 36" fill="none" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <rect width="128" height="36" rx="18" fill="#C71212"/>
  </svg>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, toRefs } from 'vue';

const props = withDefaults(defineProps < { width: number | string,height: number | string} > (), {
    width:24,
    height:24
});

const {width,height } = toRefs(props);
</script>
