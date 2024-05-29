/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 02:39:23
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 02:40:29
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/chatroom/useChatRoom.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect } from 'react';
import { createConnection } from './chat';

export function useChatRoom({ serverUrl, roomId }: { serverUrl: string; roomId: string }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
