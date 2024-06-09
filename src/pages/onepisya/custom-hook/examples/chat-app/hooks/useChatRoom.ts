/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 16:42:54
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 16:42:56
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/chat-app/hooks/useChatRoom.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect } from 'react';
import { createConnection } from '../chat';
import { showNotification } from '../notifications';

export function useChatRoom({ serverUrl, roomId }: { serverUrl: string; roomId: string }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
      showNotification('New message: ' + msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
