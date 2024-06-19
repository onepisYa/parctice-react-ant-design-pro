/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 09:58:08
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-17 10:32:34
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/models/product.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

// 为 onepisya-dva/hello 准备的 model
export type Product = {
  id: number;
  name: string;
  key: string;
};
export default {
  namespace: 'products', // namespace 表示在全局 state 上的 key
  state: [
    {
      name: 'dva',
      id: 1,
      key: '1-dva',
    },
    {
      name: 'antd',
      id: 2,
      key: '2-antd',
    },
  ], // state 是初始值
  reducers: {
    // reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
    delete(state: Product[], { payload: id }: { payload: number }) {
      return state.filter((item) => item.id !== id);
    },
  },
};
