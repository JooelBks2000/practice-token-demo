<!-- eslint-disable -->
<template>
  <component :is="config[props.name]" :width="props.width" :height="props.height" />
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import VariantprimaryStatedefaultSizelarge from './VariantprimaryStatedefaultSizelarge.vue';
import VariantprimaryStatedefaultSizesmall from './VariantprimaryStatedefaultSizesmall.vue';
import VariantsecondaryStatedefaultSizelarge from './VariantsecondaryStatedefaultSizelarge.vue';
import VariantsecondaryStatedefaultSizesmall from './VariantsecondaryStatedefaultSizesmall.vue';
import VariantTertiaryStatedefaultSizelarge from './VariantTertiaryStatedefaultSizelarge.vue';
import VariantTertiaryStatedefaultSizesmall from './VariantTertiaryStatedefaultSizesmall.vue';
import VariantsecondaryStatehoverSizelarge from './VariantsecondaryStatehoverSizelarge.vue';
import VariantsecondaryStatehoverSizesmall from './VariantsecondaryStatehoverSizesmall.vue';
import VariantprimaryStatehoverSizelarge from './VariantprimaryStatehoverSizelarge.vue';
import VariantprimaryStatehoverSizesmall from './VariantprimaryStatehoverSizesmall.vue';
import VariantsecondaryStatedisabledSizelarge from './VariantsecondaryStatedisabledSizelarge.vue';
import VariantsecondaryStatedisabledSizesmall from './VariantsecondaryStatedisabledSizesmall.vue';
import VariantTertiaryStatehoverSizelarge from './VariantTertiaryStatehoverSizelarge.vue';
import VariantTertiaryStatehoverSizesmall from './VariantTertiaryStatehoverSizesmall.vue';
import VariantprimaryStatedisabledSizelarge from './VariantprimaryStatedisabledSizelarge.vue';
import VariantprimaryStatedisabledSizesmall from './VariantprimaryStatedisabledSizesmall.vue';
import VariantTertiaryStatedisabledSizelarge from './VariantTertiaryStatedisabledSizelarge.vue';
import VariantTertiaryStatedisabledSizesmall from './VariantTertiaryStatedisabledSizesmall.vue';
import Group8612 from './Group8612.vue';

const props = defineProps<{
  name:
    | 'VariantprimaryStatedefaultSizelarge'
      | 'VariantprimaryStatedefaultSizesmall'
      | 'VariantsecondaryStatedefaultSizelarge'
      | 'VariantsecondaryStatedefaultSizesmall'
      | 'VariantTertiaryStatedefaultSizelarge'
      | 'VariantTertiaryStatedefaultSizesmall'
      | 'VariantsecondaryStatehoverSizelarge'
      | 'VariantsecondaryStatehoverSizesmall'
      | 'VariantprimaryStatehoverSizelarge'
      | 'VariantprimaryStatehoverSizesmall'
      | 'VariantsecondaryStatedisabledSizelarge'
      | 'VariantsecondaryStatedisabledSizesmall'
      | 'VariantTertiaryStatehoverSizelarge'
      | 'VariantTertiaryStatehoverSizesmall'
      | 'VariantprimaryStatedisabledSizelarge'
      | 'VariantprimaryStatedisabledSizesmall'
      | 'VariantTertiaryStatedisabledSizelarge'
      | 'VariantTertiaryStatedisabledSizesmall'
      | 'Group8612'
  ;
  width?: string | number;
  height?:string | number
}>();

const config = {
  'VariantprimaryStatedefaultSizelarge': VariantprimaryStatedefaultSizelarge,
  'VariantprimaryStatedefaultSizesmall': VariantprimaryStatedefaultSizesmall,
  'VariantsecondaryStatedefaultSizelarge': VariantsecondaryStatedefaultSizelarge,
  'VariantsecondaryStatedefaultSizesmall': VariantsecondaryStatedefaultSizesmall,
  'VariantTertiaryStatedefaultSizelarge': VariantTertiaryStatedefaultSizelarge,
  'VariantTertiaryStatedefaultSizesmall': VariantTertiaryStatedefaultSizesmall,
  'VariantsecondaryStatehoverSizelarge': VariantsecondaryStatehoverSizelarge,
  'VariantsecondaryStatehoverSizesmall': VariantsecondaryStatehoverSizesmall,
  'VariantprimaryStatehoverSizelarge': VariantprimaryStatehoverSizelarge,
  'VariantprimaryStatehoverSizesmall': VariantprimaryStatehoverSizesmall,
  'VariantsecondaryStatedisabledSizelarge': VariantsecondaryStatedisabledSizelarge,
  'VariantsecondaryStatedisabledSizesmall': VariantsecondaryStatedisabledSizesmall,
  'VariantTertiaryStatehoverSizelarge': VariantTertiaryStatehoverSizelarge,
  'VariantTertiaryStatehoverSizesmall': VariantTertiaryStatehoverSizesmall,
  'VariantprimaryStatedisabledSizelarge': VariantprimaryStatedisabledSizelarge,
  'VariantprimaryStatedisabledSizesmall': VariantprimaryStatedisabledSizesmall,
  'VariantTertiaryStatedisabledSizelarge': VariantTertiaryStatedisabledSizelarge,
  'VariantTertiaryStatedisabledSizesmall': VariantTertiaryStatedisabledSizesmall,
  'Group8612': Group8612,
};
</script>