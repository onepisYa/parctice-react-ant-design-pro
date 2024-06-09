/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-28 03:27:36
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:22:21
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/CountLabel.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Dispatch, SetStateAction, useState } from 'react';
type Trend = string | null;

function CountLabel({ count }: { count: number }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend]: [Trend, Dispatch<SetStateAction<Trend>>] = useState(null as Trend);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <CountLabel count={count} />
    </>
  );
}
