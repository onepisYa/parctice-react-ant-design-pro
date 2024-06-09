/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 14:31:56
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 14:33:47
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/StatusBar.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect, useState } from 'react';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
      当你的网络掉线之后、你会看到 ❌
    </>
  );
}
