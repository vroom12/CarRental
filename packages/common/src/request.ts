import axios, {type AxiosRequestConfig} from 'axios';

const http = axios.create({
  baseURL: '/',
  timeout: 5000, // 请求超时时间设置为 5 秒
});

export const request = (config: AxiosRequestConfig): Promise<any> => {
  return http.request(config);
};
// request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// response interceptor
axios.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);
