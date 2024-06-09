/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 03:01:06
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:46:45
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/box/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { MutableRefObject, useEffect, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

function Box() {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    const div = ref.current as HTMLDivElement;
    const parent: HTMLDivElement = div.parentElement as HTMLDivElement;
    if (isIntersecting) {
      parent.style.backgroundColor = 'black';
      parent.style.color = 'white';
      // document.body.style.backgroundColor = 'black';
      // document.body.style.color = 'white';
    } else {
      parent.style.backgroundColor = 'white';
      parent.style.color = 'black';
      // document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: '2px solid black',
        backgroundColor: 'blue',
      }}
    />
  );
}
function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul>{items}</ul>;
}

export default function App() {
  return (
    <>
      <div className="visiable">
        <LongSection />
        <Box />
        <LongSection />
        <Box />
        <LongSection />
      </div>
    </>
  );
}
