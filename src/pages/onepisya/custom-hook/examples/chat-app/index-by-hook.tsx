/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 16:28:36
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 17:47:52
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/chat-app/index-by-hook.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import ChatRoom from './ChatRoomByHook';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
