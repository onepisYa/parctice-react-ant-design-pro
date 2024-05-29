/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-29 02:16:40
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-29 02:18:22
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/GlobalWindow.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect, useState } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: { clientX: any; clientY: any }) {
      setPosition({ x: e.clientX - 200, y: e.clientY - 50 });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'pink',
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
