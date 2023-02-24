import type {Theme} from 'ant-design-vue/es/config-provider';

export interface StoreState {
  darkMode: boolean;
  themeColor: Theme;
  creatUserName: string;
  creatUserId: string;
}
