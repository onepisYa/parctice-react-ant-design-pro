/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 15:47:39
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-19 02:03:15
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/examples/users/services/users.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import request from '@/utils/request';
import { PAGE_SIZE } from '../constants';
import type { User } from '../types/index';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`)
    .then((res) => res)
    .catch((error) => {
      console.log('fetch error:', error);
    });
}

export function remove(id: string) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res)
    .catch((error) => {
      console.log('delete error:', error);
    });
}

export function patch(id: User['key'], values: User) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('pathch', err);
    });
}

export function create(values: User) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('create', err);
    });
}
