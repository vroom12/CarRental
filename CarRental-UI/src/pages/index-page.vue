<script setup lang="ts">
import { debounceFilter, useMouse } from '@vueuse/core';

const { x, y } = useMouse({ eventFilter: debounceFilter(100) });
</script>

<template>
  <div>首页</div>
  <div>mouse：({{ x }},{{ y }})</div>
</template>
