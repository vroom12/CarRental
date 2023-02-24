import {request} from './request';
import {USER} from './types';
import type {UserItem} from '/@/interface/user';

export const apiUserLogin = (data: Pick<UserItem, 'username' | 'password'>) => {
  return request({
    url: `${USER}/login`,
    method: 'POST',
    data,
  });
};

export const apiUserRegister = (data: Omit<UserItem, 'id'>) => {
  return request({
    url: `${USER}/register`,
    method: 'POST',
    data,
  });
};
