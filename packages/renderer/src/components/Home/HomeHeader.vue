<script setup lang="ts">
import {useStore} from '/@/store';

const store = useStore();
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: true,
  },
});
const emits = defineEmits(['isCollapsed']);
const isCollapsed = () => {
  emits('isCollapsed');
};
</script>
<template>
  <div>
    <a-button @click="isCollapsed">
      <menu-fold-outlined v-if="!props.isCollapsed" /> <menu-unfold-outlined v-else />
    </a-button>
    <a-button @click="store.themeToggler">
      <bulb-outlined v-if="!store.darkMode" /> <bulb-filled v-else />
    </a-button>
  </div>
</template>
