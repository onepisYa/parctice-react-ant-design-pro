/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 15:46:21
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-17 17:19:57
 * @FilePath: /parctice-react-ant-design-pro/src/utils/request.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
// import fetch from 'dva/fetch';
// import { request, useRequest } from 'umi';

// 定义一个扩展了 Error 的类，并添加一个 response 属性
class HttpError extends Error {
  response: Response;

  constructor(message: string, response: Response) {
    super(message); // 调用 Error 的构造函数
    this.response = response; // 添加 response 属性
    Object.setPrototypeOf(this, HttpError.prototype); // 设置原型，以便 instanceof 正常工作
  }
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new HttpError(response.statusText, response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url: string, options?: object) {
  const response = await fetch(url, options);

  checkStatus(response);

  const data = await response.json();

  const ret = {
    data,
    headers: {},
  };
  // 由于我们需要从 response headers 中获取 total users 数量，所以需要改造下 src/utils/request
  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  } else {
    ret.headers['x-total-count'] = 10;
  }

  return ret;
}
