import type {FormConfigType} from '/@/interface/common';

export const getLoginFormValues = () => ({
  username: '',
  password: '',
  name: '',
  email: '',
  phone: '',
  avatar: '',
});

export const getRegisterFormConfig = (): FormConfigType[] => [
  {
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        min: 3,
        max: 15,
        message: '用户名长度在3到15个字符',
      },
      {
        pattern: /^[a-zA-Z0-9_]+$/,
        message: '用户名只能包含字母、数字和下划线',
      },
    ],
    type: 'input',
    slot: {
      component: 'UserOutlined',
      class: 'site-form-item-icon',
    },
  },
  {
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '请输入密码',
      },
      {
        min: 6,
        max: 15,
        message: '密码长度在6到15个字符',
      },
      {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
        message: '密码必须包含大小写字母和数字',
      },
    ],
    // TODO
    // type: 'input-password',
    type: 'input',
  },
  {
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名',
    rules: [
      {
        required: true,
        message: '请输入姓名',
      },
      {
        min: 2,
        max: 10,
        message: '姓名长度在2到10个字符',
      },
      {
        pattern: /^[\u4e00-\u9fa5]+$/,
        message: '姓名只能包含中文',
      },
    ],
    type: 'input',
  },
  {
    label: '邮箱',
    prop: 'email',
    placeholder: '请输入邮箱',
    rules: [
      {
        required: true,
        message: '请输入邮箱',
      },
      {
        type: 'email',
        message: '邮箱格式不正确',
      },
    ],
    type: 'input',
  },
  {
    label: '电话',
    prop: 'phone',
    placeholder: '请输入电话',
    rules: [
      {
        required: true,
        message: '请输入电话',
      },
      {
        pattern: /^1[3456789]\d{9}$/,
        message: '电话格式不正确',
      },
      {
        min: 11,
        max: 11,
        message: '电话长度为11个字符',
      },
    ],
    type: 'input',
  },
];

export const getLoginFormConfig = (): FormConfigType[] => [
  {
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        min: 3,
        max: 15,
        message: '用户名长度在3到15个字符',
      },
    ],
    type: 'input',
  },
  {
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '请输入密码',
      },
      {
        min: 6,
        max: 15,
        message: '密码长度在6到15个字符',
      },
      {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
        message: '密码必须包含大小写字母和数字',
      },
    ],
    // TODO
    // type: 'input-password',
    type: 'input',
  },
];
