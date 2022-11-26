import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const TOKEN_ERROR = 'Token认证失败，请重新登录';
const NETWORK_ERROR = '网络异常，请检查网络后重试';

const service = axios.create({
  // 基础路径
  baseURL: '/api',
  // 请求超时时间
  timeout: 5000,
});
