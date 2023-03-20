import type {Theme} from 'ant-design-vue/es/config-provider';
import type {UserItem} from './user';

export interface StoreState {
  darkMode: boolean;
  themeColor: Theme;
  creatUserName: string;
  creatUserId: string;
  userData: Omit<UserItem, 'password'>;
}
