import {request} from './request';
import {CUSTOMER, LEASE_RECORD} from './types';
import type {CustomerItem, leaseRecordType} from '/@/interface/customer';

export const apiCustomerList = () => {
  return request<CustomerItem[]>({
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

export const apiCustomerPage = (data: {pageSize: number; pageNumber: number}) => {
  return request<CustomerItem[]>({
    url: `${CUSTOMER}/page`,
    method: 'POST',
    data,
  });
};

export const apiCustomerInsert = (data: Omit<CustomerItem, '_id'>) => {
  return request<CustomerItem>({
    url: `${CUSTOMER}/insert`,
    method: 'POST',
    data,
  });
};

export const apiCustomerUpdate = (data: Omit<CustomerItem, '_id'>, id: string) => {
  return request({
    url: `${CUSTOMER}/${id}`,
    method: 'PATCH',
    data,
  });
};

export const apiCustomerDelete = (id: string) => {
  return request({
    url: `${CUSTOMER}/${id}`,
    method: 'DELETE',
  });
};

export const apiFindBuCustomerId = (data: {customerId: string}) => {
  return request<leaseRecordType[]>({
    url: `${LEASE_RECORD}/findBuCustomerId`,
    method: 'POST',
    data,
  });
};
