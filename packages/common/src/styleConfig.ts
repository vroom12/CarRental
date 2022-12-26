import {ConfigProvider} from 'ant-design-vue';
import dark from 'ant-design-vue/dist/antd.dark.min.css';
import light from 'ant-design-vue/dist/antd.variable.min.css';
import type {Theme} from 'ant-design-vue/es/config-provider';

export const theme = (theme: Theme) => {
  ConfigProvider.config({
    theme: {
      ...theme,
    },
  });
};

export const toggleTheme = (theme: string) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(theme));
  head.appendChild(style);
};

export const changeTheme = (darkMode: boolean, themeColor: Theme) => {
  if (darkMode) {
    toggleTheme(dark);
  } else {
    toggleTheme(light);
    theme(themeColor);
  }
};
