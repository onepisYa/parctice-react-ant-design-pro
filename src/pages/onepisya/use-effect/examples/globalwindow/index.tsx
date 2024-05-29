/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 02:49:04
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 02:58:17
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/globalwindow/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import { useWindowListener } from './useWindowListener';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useWindowListener('pointermove', (e: Event) => {
    const { clientX, clientY } = e as PointerEvent;
    setPosition({ x: clientX, y: clientY + 400 });
  });

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}
