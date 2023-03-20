import axios, {type AxiosRequestConfig} from 'axios';
import {message, Spin} from 'ant-design-vue';
export interface RequestCongig extends AxiosRequestConfig {
  isLoading?: boolean;
}
export interface ResponseData<T> {
  msg: string;
  success: boolean;
  data?: T;
  code: number;
}

export interface RequestWrapModal {
  NoticeFunc: any;
  LoadingFunc: any;
  getToken: () => string;
}

export const wrapRequest =
  ({NoticeFunc, LoadingFunc, getToken}: RequestWrapModal) =>
  <T>(requestParams: RequestCongig): Promise<ResponseData<T>> => {
    let loadingObj: any = null;
    function clearLoading() {
      if (loadingObj) {
        if (loadingObj) {
          loadingObj.hide();
        }
      }
      loadingObj = null;
    }
    return new Promise(resolve => {
      const token = getToken();
      const isLoading = requestParams.isLoading || false;
      if (isLoading) {
        loadingObj = LoadingFunc.show();
      }
      try {
        axios
          .request({
            ...requestParams,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(res => {
            clearLoading();
            let _data = res.data;
            if (!_data) {
              _data = {
                code: '',
                msg: '',
              };
            }
            resolve({
              ..._data,
              success: _data.code === 0,
            });
          })
          .catch(error => {
            const errorMsg =
              `${error?.response?.status ? `${error.response.status} - ` : ''}` +
              (error?.response?.data?.msg || error.message);
            const errorCode = error?.response?.data?.msg || '0001';
            clearLoading();
            resolve({
              code: errorCode,
              success: false,
              msg: errorMsg,
            });
          });
      } catch (error: any) {
        console.log(error);
        NoticeFunc('系统繁忙');
        clearLoading();
        resolve({
          success: false,
          code: 9999,
          data: error,
          msg: error.message,
        });
      }
    });
  };

const getToken = () => {
  return localStorage.getItem('token') || '';
};
export const request = wrapRequest({
  NoticeFunc: message.error,
  LoadingFunc: Spin,
  getToken,
});
