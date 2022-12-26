<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();
const change = () => {
  router.push({
    name: 'home',
  });
};
</script>

<template>
  <div
    class="my-login"
    @click="change"
  >
    login
  </div>
</template>

<style lang="less" scoped></style>
