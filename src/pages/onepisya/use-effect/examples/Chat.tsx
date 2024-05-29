/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-29 02:08:06
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-29 02:11:48
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/Chat.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect, useState } from 'react';

function createConnection(serverUrl: string, roomId: string) {
  // 真正的实现会实际连接到服务器
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}

function ChatRoom({ roomId }: { roomId: string }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL: <input value={serverUrl} onChange={(e) => setServerUrl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
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
      <button onClick={() => setShow(!show)}>{show ? 'Close chat' : 'Open chat'}</button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
