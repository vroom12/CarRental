import {defineStore} from 'pinia';
import {changeTheme} from '../../../common/src/styleConfig';
import type {StoreState} from '../interface/store';

export const getDefaultStoreState = (): StoreState => ({
  darkMode: false,
  themeColor: {},
});

export const useStore = defineStore('store', {
  state: (): StoreState => getDefaultStoreState(),
  getters: {},
  actions: {
    setThemeColor(themeColor: StoreState['themeColor']) {
      this.themeColor = themeColor;
    },
    themeToggler() {
      this.darkMode = !this.darkMode;
      changeTheme(this.darkMode, this.themeColor);
    },
  },
});
