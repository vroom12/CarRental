<script setup lang="ts">
import {reactive, ref} from 'vue';
import {getLoginFormValues, getRegisterFormConfig, getLoginFormConfig} from './config';
import {UserItem} from '/@/interface/user';
import router from '/@/router';
import {Form} from 'ant-design-vue';
import {message} from 'ant-design-vue';
import {apiUserLogin, apiUserRegister} from '/@/api/user';
import {Modal} from 'ant-design-vue';

const useForm = Form.useForm;
const activeKey = ref('login');
const state = reactive<{
  formVal: UserItem;
  loginFormVal: Pick<UserItem, 'username' | 'password'>;
}>({
  formVal: {
    ...getLoginFormValues(),
  },
  loginFormVal: {
    username: '',
    password: '',
  },
});

const getRules = () => {
  const formRulesVal: any = {};
  for (const k in state.formVal) {
    if (Object.prototype.hasOwnProperty.call(state.formVal, k)) {
      formRulesVal[k] = getRegisterFormConfig().find(v => v.prop === k)?.rules;
    }
  }
  return formRulesVal;
};

const rules = reactive({
  register: getRules(),
  login: {
    username: getLoginFormConfig().find(v => v.prop === 'username')?.rules,
    password: getLoginFormConfig().find(v => v.prop === 'password')?.rules,
  },
});

const userLogin = async (data: Pick<UserItem, 'username' | 'password'>) => {
  const res = await apiUserLogin(data);
  console.log(res);

  if (res.data.code === 200) {
    message.success('登录成功');
    router.push({name: 'home', params: {id: res.data.data.userid}});
    return res.data.data;
  } else if (res.data.code === 404) {
    message.error('用户不存在');
    Modal.confirm({
      title: '用户不存在',
      content: '是否前往注册',
      onOk: () => {
        activeKey.value = 'register';
      },
    });
  } else if (res.data.code === 401) {
    message.error('密码错误');
  } else {
    message.error('登录失败');
  }
};

const userRegister = async (data: UserItem) => {
  const res = await apiUserRegister(data);
  console.log(res);

  if (res.data.code === 200) {
    message.success('注册成功');
    Modal.confirm({
      title: '注册成功',
      content: '是否前往登录',
      onOk: () => {
        activeKey.value = 'login';
        state.loginFormVal = {
          username: data.username,
          password: data.password,
        };
      },
    });
    return res.data.data;
  } else if (res.data.code === 404) {
    message.error(res.data.message);
  } else {
    message.error('注册失败');
  }
};

const onSubmit = () => {
  const {validate} = useForm(state.formVal, rules.register);
  validate()
    .then(() => {
      userRegister(state.formVal);
    })
    .catch((err: any) => {
      message.error(err.errorFields[0].errors[0]);
    });
};

const login = () => {
  const {validate} = useForm(state.loginFormVal, rules.login);
  validate()
    .then(() => {
      userLogin(state.loginFormVal);
    })
    .catch((err: any) => {
      message.error(err.errorFields[0].errors[0]);
    });
};
</script>

<template>
  <div class="loginAndRegister">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane
        key="login"
        tab="登录"
      >
        <a-form
          :model="state.loginFormVal"
          name="user-login"
          @submit="login"
        >
          <a-form-item
            v-for="v in getLoginFormConfig()"
            :key="v.prop"
            :label="v.label"
            :rules="v.rules"
            :name="v.prop"
          >
            <component
              :is="`a-${v.type}`"
              v-model:value="state.loginFormVal[v.prop as keyof Pick<UserItem, 'username' | 'password'>]"
            ></component>
          </a-form-item>
          <a-form-item class="btn">
            <a-button
              type="primary"
              html-type="submit"
            >
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane
        key="register"
        tab="注册"
      >
        <a-form
          :model="state.formVal"
          name="user-register"
          @submit="onSubmit"
        >
          <a-form-item
            v-for="v in getRegisterFormConfig()"
            :key="v.prop"
            :label="v.label"
            :rules="v.rules"
            :name="v.prop"
          >
            <component
              :is="`a-${v.type}`"
              v-model:value="state.formVal[v.prop as keyof UserItem]"
              :placeholder="v.placeholder"
              label-align="right"
            >
              <template
                v-if="v.slot"
                #prefix
              >
                <!-- <component
                  :is="v.slot?.component ?? 'div'"
                  :class="v.slot?.class ?? 'prefix'"
                /> -->
              </template>
            </component>
          </a-form-item>
          <a-form-item class="btn">
            <a-button
              type="primary"
              html-type="submit"
            >
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="less" scoped>
.loginAndRegister {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-tabs {
    width: 400px;
    max-height: 500px;
    overflow-y: auto;
    .ant-tabs-nav {
      .ant-tabs-tab {
        width: 50%;
        text-align: center;
      }
    }
    .ant-tabs-content {
      .ant-tabs-tabpane {
        padding: 0;
      }
    }
  }
}
.btn {
  text-align: center;
}
</style>
