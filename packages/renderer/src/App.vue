<script lang="ts" setup>
// const APP_VERSION = import.meta.env.VITE_APP_VERSION;
import {RouterView} from 'vue-router';
import {theme} from '../../common/src/styleConfig';
import {defaultTheme} from '../../common/src/theme';
import {useStore} from './store';

const store = useStore();

store.setThemeColor(defaultTheme);
theme(store.themeColor);
</script>

<template>
  <!-- <button @click="store.themeToggler">点击</button> -->
  <RouterView />
</template>

<style scoped></style>
