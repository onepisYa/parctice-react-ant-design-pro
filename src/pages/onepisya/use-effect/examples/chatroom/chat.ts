/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 02:39:38
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 02:40:45
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/chatroom/chat.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
export function createConnection(serverUrl: string, roomId: string) {
  // 真正的实现将实际连接到服务器
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}
