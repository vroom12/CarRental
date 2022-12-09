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
  </div>
</template>

<style lang="less" scoped>
.my-login {
  width: 100px;
  height: 100px;
  background-color: black;
}
</style>
