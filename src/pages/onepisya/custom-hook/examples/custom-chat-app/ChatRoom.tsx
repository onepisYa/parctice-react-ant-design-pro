/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 16:25:54
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 16:34:56
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/chat-app/chatRoom.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import { useChatRoom } from './hooks/useChatRoom';
import { showNotification } from './notifications';

export default function ChatRoom({ roomId }: { roomId: string }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
    onReceiveMessage(msg) {
      showNotification('New message: ' + msg);
    },
  });

  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl} onChange={(e) => setServerUrl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
