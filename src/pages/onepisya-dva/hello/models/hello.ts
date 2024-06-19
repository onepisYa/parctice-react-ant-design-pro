/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 09:58:08
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-17 14:41:15
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/models/hello.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

type TestState = {
  count: number;
};
// 为 onepisya-dva 一系列的测试数据
export default {
  namespace: 'test', // namespace 表示在全局 state 上的 key
  state: {
    count: 0,
  },
  reducers: {
    // reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
    add(state: TestState) {
      return { ...state, count: state.count + 1 };
    },
    minus(state: TestState) {
      return { ...state, count: state.count - 1 };
    },
  },
};
