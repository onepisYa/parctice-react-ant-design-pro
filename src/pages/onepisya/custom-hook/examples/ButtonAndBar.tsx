/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 14:46:24
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 14:48:32
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/ButtonAndBar.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useOnlineStatus } from '../hooks/useOnlineStatus';

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
    <button disabled={!isOnline} onClick={handleSaveClick}>
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
