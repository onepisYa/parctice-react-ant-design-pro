/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 16:42:54
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:33:25
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/custom-chat-app/hooks/useChatRoom.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
// import { experimental_useEffectEvent as useEffectEvent, useEffect } from 'react';
import { useEffect } from 'react';
import { createConnection } from '../chat';

export function useChatRoom({
  serverUrl,
  roomId,
  onReceiveMessage,
}: {
  serverUrl: string;
  roomId: string;
  onReceiveMessage: (message: string) => void;
}) {
  // const onMessage = useEffectEvent(onReceiveMessage);
  // ✅ 通过 将这个事件处理函数包裹到 Effect Event 中来将它从依赖中移除
  // useEffectEvent 是一个 React Hook，可让您将非反应式逻辑提取到 Effect Event 中。
  // 目前还是实验性的 2024-06-08 19:26:42
  // const onMessage = onReceiveMessage;
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
      // onMessage(msg);
      onReceiveMessage(msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
