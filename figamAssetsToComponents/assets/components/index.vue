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
    | 'variant&#x3D;primary, state&#x3D;default, size&#x3D;Large'
      | 'variant&#x3D;primary, state&#x3D;default, size&#x3D;Small'
      | 'variant&#x3D;secondary, state&#x3D;default, size&#x3D;Large'
      | 'variant&#x3D;secondary, state&#x3D;default, size&#x3D;Small'
      | 'variant&#x3D;Tertiary, state&#x3D;default, size&#x3D;Large'
      | 'variant&#x3D;Tertiary, state&#x3D;default, size&#x3D;Small'
      | 'variant&#x3D;secondary, state&#x3D;hover, size&#x3D;Large'
      | 'variant&#x3D;secondary, state&#x3D;hover, size&#x3D;Small'
      | 'variant&#x3D;primary, state&#x3D;hover, size&#x3D;Large'
      | 'variant&#x3D;primary, state&#x3D;hover, size&#x3D;Small'
      | 'variant&#x3D;secondary, state&#x3D;disabled, size&#x3D;Large'
      | 'variant&#x3D;secondary, state&#x3D;disabled, size&#x3D;Small'
      | 'variant&#x3D;Tertiary, state&#x3D;hover, size&#x3D;Large'
      | 'variant&#x3D;Tertiary, state&#x3D;hover, size&#x3D;Small'
      | 'variant&#x3D;primary, state&#x3D;disabled, size&#x3D;Large'
      | 'variant&#x3D;primary, state&#x3D;disabled, size&#x3D;Small'
      | 'variant&#x3D;Tertiary, state&#x3D;disabled, size&#x3D;Large'
      | 'variant&#x3D;Tertiary, state&#x3D;disabled, size&#x3D;Small'
      | 'Group8612'
  ;
  width?: string | number;
  height?:string | number
}>();

const config = {
  'variant&#x3D;primary, state&#x3D;default, size&#x3D;Large': VariantprimaryStatedefaultSizelarge,
  'variant&#x3D;primary, state&#x3D;default, size&#x3D;Small': VariantprimaryStatedefaultSizesmall,
  'variant&#x3D;secondary, state&#x3D;default, size&#x3D;Large': VariantsecondaryStatedefaultSizelarge,
  'variant&#x3D;secondary, state&#x3D;default, size&#x3D;Small': VariantsecondaryStatedefaultSizesmall,
  'variant&#x3D;Tertiary, state&#x3D;default, size&#x3D;Large': VariantTertiaryStatedefaultSizelarge,
  'variant&#x3D;Tertiary, state&#x3D;default, size&#x3D;Small': VariantTertiaryStatedefaultSizesmall,
  'variant&#x3D;secondary, state&#x3D;hover, size&#x3D;Large': VariantsecondaryStatehoverSizelarge,
  'variant&#x3D;secondary, state&#x3D;hover, size&#x3D;Small': VariantsecondaryStatehoverSizesmall,
  'variant&#x3D;primary, state&#x3D;hover, size&#x3D;Large': VariantprimaryStatehoverSizelarge,
  'variant&#x3D;primary, state&#x3D;hover, size&#x3D;Small': VariantprimaryStatehoverSizesmall,
  'variant&#x3D;secondary, state&#x3D;disabled, size&#x3D;Large': VariantsecondaryStatedisabledSizelarge,
  'variant&#x3D;secondary, state&#x3D;disabled, size&#x3D;Small': VariantsecondaryStatedisabledSizesmall,
  'variant&#x3D;Tertiary, state&#x3D;hover, size&#x3D;Large': VariantTertiaryStatehoverSizelarge,
  'variant&#x3D;Tertiary, state&#x3D;hover, size&#x3D;Small': VariantTertiaryStatehoverSizesmall,
  'variant&#x3D;primary, state&#x3D;disabled, size&#x3D;Large': VariantprimaryStatedisabledSizelarge,
  'variant&#x3D;primary, state&#x3D;disabled, size&#x3D;Small': VariantprimaryStatedisabledSizesmall,
  'variant&#x3D;Tertiary, state&#x3D;disabled, size&#x3D;Large': VariantTertiaryStatedisabledSizelarge,
  'variant&#x3D;Tertiary, state&#x3D;disabled, size&#x3D;Small': VariantTertiaryStatedisabledSizesmall,
  'Group8612': Group8612,
};
</script>