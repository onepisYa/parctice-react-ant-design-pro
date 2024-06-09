/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 05:31:13
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 05:43:22
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/Count.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('[effect setup]');

    const intervalId = setInterval(() => {
      setCount((c) => c + 1); // ✅ 传递一个 state 更新器
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('[effect cleanup]');
    };
  }, []); // ✅现在 count 不是一个依赖项
  // 如果不写、也会在每次更新的时候执行 setup 和 cleanup

  if (count > 10) {
  }

  return <h1>{count}</h1>;
}
