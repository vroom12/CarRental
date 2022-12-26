import {createApp} from 'vue';
import App from '/@/App.vue';

import router from '/@/router/index';
import {createPinia} from 'pinia';
import Antd from 'ant-design-vue';
import * as Icon from '@ant-design/icons-vue';

import 'ant-design-vue/dist/antd.min.css';
import 'ant-design-vue/dist/antd.variable.min.css';
// import '/@/styles/reset.less';

const icons: any = Icon;
const app = createApp(App);

app.use(router).use(createPinia()).use(Antd).mount('#app');
for (const i in icons) {
  app.component(i, icons[i]);
}
