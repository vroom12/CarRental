<script setup lang="ts">
import HomeAside from '/@/components/Home/HomeAside.vue';
</script>

<template>
  <div class="my-home">
    <div class="my-home-home">123</div>
    <HomeAside />
  </div>
</template>

<style lang="less" scoped>
.my-home {
  &-home {
    width: 100px;
    height: 100px;
    background-color: aqua;
  }
}
</style>
