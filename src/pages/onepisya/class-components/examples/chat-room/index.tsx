/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 16:49:00
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:20:45
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/chat-room/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import ChatRoom from './ChatRoom';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        选择一个聊天室:{' '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">日常</option>
          <option value="travel">旅行</option>
          <option value="music">音乐</option>
        </select>
      </label>
      <button type="button" onClick={() => setShow(!show)}>
        {show ? '关闭聊天' : '开启聊天'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
