<script setup lang="ts">
import {ref} from 'vue';
import HomeAside from '/@/components/Home/HomeAside.vue';
import HomeContent from '/@/components/Home/HomeContent.vue';
import HomeHeader from '/@/components/Home/HomeHeader.vue';

const isCollapsed = ref(true);
const refHomeAside = ref<InstanceType<typeof HomeAside>>();

const collapsedToggle = () => {
  isCollapsed.value = !isCollapsed.value;
  refHomeAside.value?.isCollapsed(isCollapsed.value);
};
</script>

<template>
  <div class="my-home">
    <a-layout>
      <home-aside ref="refHomeAside" />
      <a-layout>
        <home-header
          :is-collapsed="isCollapsed"
          @is-collapsed="collapsedToggle"
        ></home-header>
        <home-content>
          <template #default>
            <router-view></router-view>
          </template>
        </home-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="less" scoped>
.my-home {
  width: 100vw;
  height: 100vh;
}
</style>
