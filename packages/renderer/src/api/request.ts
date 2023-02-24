import axios, {type AxiosRequestConfig} from 'axios';
import type {AxiosResponse} from 'axios';

const http = axios.create({
  baseURL: '/api',
  timeout: 5000, // 请求超时时间设置为 5 秒
});

export const wrapRequest =
  () =>
  (config: AxiosRequestConfig): Promise<AxiosResponse> => {
    return http.request(config);
  };

export const request = wrapRequest();
