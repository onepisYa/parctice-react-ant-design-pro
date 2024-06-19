/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 13:36:39
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-17 14:43:32
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/examples/count/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

// import { connect } from 'dva';
import { connect } from 'umi';

const Count = connect(({ test: { count } }: any) =>
  // 结构 test 中的 count 出来
  ({ count }),
)(
  // 然后只要 count
  function ({
    dispatch,
    count,
  }: {
    // 从 props 中结构出 count
    dispatch: any;
    count: number;
  }) {
    // props 中就会只有一个 count 值
    return (
      <div>
        <h2>{count}</h2>
        <button
          type="button"
          key="add"
          onClick={() => {
            dispatch({ type: 'test/add' });
          }}
        >
          +
        </button>
        <button
          type="button"
          key="minus"
          onClick={() => {
            dispatch({ type: 'test/minus' });
          }}
        >
          -
        </button>
      </div>
    );
  },
);

export default Count;
