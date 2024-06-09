/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 20:51:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:20:40
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/BetterSaveButton.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

export function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, // 如何在客户端获取值
    () => true, // 如何在服务端获取值
  );
}

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button type="button" disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
