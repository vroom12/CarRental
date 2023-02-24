import {request} from './request';
import {CUSTOMER} from './types';
import type {CustomerItem} from '/@/interface/customer';

export const apiCustomerList = () => {
  return request({
    url: `${CUSTOMER}`,
    method: 'GET',
  });
};

export const apiCustomerById = (id: string) => {
  return request({
    url: `${CUSTOMER}/${id}`,
    method: 'GET',
  });
};

export const apiCustomerPage = (data: {page: number; pageSize: number}) => {
  return request({
    url: `${CUSTOMER}/page`,
    method: 'GET',
    data,
  });
};

export const apiCustomerInsert = (data: Omit<CustomerItem, '_id'>) => {
  return request({
    url: `${CUSTOMER}insert`,
    method: 'POST',
    data,
  });
};

export const apiCustomerUpdate = (data: Omit<CustomerItem, '_id'>, id: string) => {
  return request({
    url: `${CUSTOMER}/${id}`,
    method: 'PUT',
    data,
  });
};

export const apiCustomerDelete = (id: string) => {
  return request({
    url: `${CUSTOMER}/${id}`,
    method: 'DELETE',
  });
};
