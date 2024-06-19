/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-18 15:06:18
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-18 17:12:50
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/examples/users/types/index.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
export type User = {
  key: string | undefined;
  name: string | undefined;
  age: number | undefined;
  address: string | undefined;
};

export type CreateUser = {
  name: User['name'];
  age: User['age'];
  address: User['age'];
};
