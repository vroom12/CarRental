import { defineStore } from 'pinia';

export const getDefaultStoreState = () => ({});

export const useCoreStore = defineStore('core-data', {
  state: () => getDefaultStoreState(),
  getters: {},
  actions: {},
});
