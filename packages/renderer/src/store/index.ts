import {defineStore} from 'pinia';
import {changeTheme} from '../../../common/src/styleConfig';
import type {StoreState} from '../interface/store';
import type {UserItem} from '../interface/user';

export const getDefaultStoreState = (): StoreState => ({
  darkMode: false,
  themeColor: {},
  creatUserName: '',
  creatUserId: '',
  userData: {
    username: '',
    name: '',
    _id: '',
    email: '',
    avatar: '',
    phone: '',
  },
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
    setUser(user: Omit<UserItem, 'password'>) {
      this.userData = user;
    },
  },
});
