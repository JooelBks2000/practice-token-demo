<!-- eslint-disable -->
<template>
  <component     
    v-for="item in list"
    :key="item" :is="config[item]" :width="props.width" :height="props.height" />
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import VariantprimaryStatedefaultSizelarge from './VariantprimaryStatedefaultSizelarge.vue';
import VariantprimaryStatedefaultSizesmall from './VariantprimaryStatedefaultSizesmall.vue';
import VariantsecondaryStatedefaultSizelarge from './VariantsecondaryStatedefaultSizelarge.vue';
import VariantsecondaryStatedefaultSizesmall from './VariantsecondaryStatedefaultSizesmall.vue';
import VarianttertiaryStatedefaultSizelarge from './VarianttertiaryStatedefaultSizelarge.vue';
import VarianttertiaryStatedefaultSizesmall from './VarianttertiaryStatedefaultSizesmall.vue';
import VariantsecondaryStatehoverSizelarge from './VariantsecondaryStatehoverSizelarge.vue';
import VariantsecondaryStatehoverSizesmall from './VariantsecondaryStatehoverSizesmall.vue';
import VariantprimaryStatehoverSizelarge from './VariantprimaryStatehoverSizelarge.vue';
import VariantprimaryStatehoverSizesmall from './VariantprimaryStatehoverSizesmall.vue';
import VariantsecondaryStatedisabledSizelarge from './VariantsecondaryStatedisabledSizelarge.vue';
import VariantsecondaryStatedisabledSizesmall from './VariantsecondaryStatedisabledSizesmall.vue';
import VarianttertiaryStatehoverSizelarge from './VarianttertiaryStatehoverSizelarge.vue';
import VarianttertiaryStatehoverSizesmall from './VarianttertiaryStatehoverSizesmall.vue';
import VariantprimaryStatedisabledSizelarge from './VariantprimaryStatedisabledSizelarge.vue';
import VariantprimaryStatedisabledSizesmall from './VariantprimaryStatedisabledSizesmall.vue';
import VarianttertiaryStatedisabledSizelarge from './VarianttertiaryStatedisabledSizelarge.vue';
import VarianttertiaryStatedisabledSizesmall from './VarianttertiaryStatedisabledSizesmall.vue';
import Group8612 from './Group8612.vue';

const props = defineProps<{
  name:
    | 'VariantprimaryStatedefaultSizelarge'
      | 'VariantprimaryStatedefaultSizesmall'
      | 'VariantsecondaryStatedefaultSizelarge'
      | 'VariantsecondaryStatedefaultSizesmall'
      | 'VarianttertiaryStatedefaultSizelarge'
      | 'VarianttertiaryStatedefaultSizesmall'
      | 'VariantsecondaryStatehoverSizelarge'
      | 'VariantsecondaryStatehoverSizesmall'
      | 'VariantprimaryStatehoverSizelarge'
      | 'VariantprimaryStatehoverSizesmall'
      | 'VariantsecondaryStatedisabledSizelarge'
      | 'VariantsecondaryStatedisabledSizesmall'
      | 'VarianttertiaryStatehoverSizelarge'
      | 'VarianttertiaryStatehoverSizesmall'
      | 'VariantprimaryStatedisabledSizelarge'
      | 'VariantprimaryStatedisabledSizesmall'
      | 'VarianttertiaryStatedisabledSizelarge'
      | 'VarianttertiaryStatedisabledSizesmall'
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
  'VarianttertiaryStatedefaultSizelarge': VarianttertiaryStatedefaultSizelarge,
  'VarianttertiaryStatedefaultSizesmall': VarianttertiaryStatedefaultSizesmall,
  'VariantsecondaryStatehoverSizelarge': VariantsecondaryStatehoverSizelarge,
  'VariantsecondaryStatehoverSizesmall': VariantsecondaryStatehoverSizesmall,
  'VariantprimaryStatehoverSizelarge': VariantprimaryStatehoverSizelarge,
  'VariantprimaryStatehoverSizesmall': VariantprimaryStatehoverSizesmall,
  'VariantsecondaryStatedisabledSizelarge': VariantsecondaryStatedisabledSizelarge,
  'VariantsecondaryStatedisabledSizesmall': VariantsecondaryStatedisabledSizesmall,
  'VarianttertiaryStatehoverSizelarge': VarianttertiaryStatehoverSizelarge,
  'VarianttertiaryStatehoverSizesmall': VarianttertiaryStatehoverSizesmall,
  'VariantprimaryStatedisabledSizelarge': VariantprimaryStatedisabledSizelarge,
  'VariantprimaryStatedisabledSizesmall': VariantprimaryStatedisabledSizesmall,
  'VarianttertiaryStatedisabledSizelarge': VarianttertiaryStatedisabledSizelarge,
  'VarianttertiaryStatedisabledSizesmall': VarianttertiaryStatedisabledSizesmall,
  'Group8612': Group8612,
};

const list = [  
  'VariantprimaryStatedefaultSizelarge',
  
  'VariantprimaryStatedefaultSizesmall',
  
  'VariantsecondaryStatedefaultSizelarge',
  
  'VariantsecondaryStatedefaultSizesmall',
  
  'VarianttertiaryStatedefaultSizelarge',
  
  'VarianttertiaryStatedefaultSizesmall',
  
  'VariantsecondaryStatehoverSizelarge',
  
  'VariantsecondaryStatehoverSizesmall',
  
  'VariantprimaryStatehoverSizelarge',
  
  'VariantprimaryStatehoverSizesmall',
  
  'VariantsecondaryStatedisabledSizelarge',
  
  'VariantsecondaryStatedisabledSizesmall',
  
  'VarianttertiaryStatehoverSizelarge',
  
  'VarianttertiaryStatehoverSizesmall',
  
  'VariantprimaryStatedisabledSizelarge',
  
  'VariantprimaryStatedisabledSizesmall',
  
  'VarianttertiaryStatedisabledSizelarge',
  
  'VarianttertiaryStatedisabledSizesmall',
  
  'Group8612',
  ]
</script>