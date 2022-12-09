<script setup lang="ts">
import {useRoute} from 'vue-router';

const route = useRoute();
console.log(route.path);
</script>

<template>
  <div>
    <slot />
  </div>
</template>
