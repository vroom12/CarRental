<script setup lang="ts">
import {ref} from 'vue';
import keys from '/@/router/modules/homeChildren';
import {useRouter} from 'vue-router';

const router = useRouter();
const collapsed = ref(true);

const change = (path: string) => {
  router.push(path);
};

const isCollapsed = (iscollapsed: boolean) => {
  collapsed.value = iscollapsed;
};

const back = () => {
  router.push('/login');
};

defineExpose({
  isCollapsed,
});
</script>

<template>
  <div class="my-home-aside">
    <a-layout-sider
      v-model:collapsed="collapsed"
      class="my-home-aside-sider"
      :trigger="null"
      collapsible
    >
      <div
        class="my-home-aside-logo"
        @click="back"
      />
      <a-menu mode="inline">
        <a-menu-item
          v-for="r in keys"
          :key="r.path"
          :title="r.meta.title"
          :class="{
            'my-home-aside-menu-item': true,
            'my-home-aside-menu-item-active': router.currentRoute.value.path === r.path,
          }"
          @click="change(r.path)"
        >
          <div>
            <component :is="r.meta.icon"></component>
            <span v-if="!collapsed">
              {{ r.meta.title }}
            </span>
          </div>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<style lang="less" scoped>
.my-home-aside {
  &-sider {
    height: 100vh;
    background: #001529;
    overflow: auto;
  }
  &-logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
}
</style>
