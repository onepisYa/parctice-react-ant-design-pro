/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 16:49:52
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 16:57:01
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/chat-room/chat.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
export type Connection = {
  connect(): void;
  disconnect(): void;
};

export function createConnection(serverUrl: string, roomId: string) {
  // 真正的实现将实际地连接到服务器
  return {
    connect() {
      console.log('✅ 成功连接到 "' + roomId + '" 号聊天室，服务端 Url：' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ 无法连接到 "' + roomId + '" 号聊天室，服务端 Url：' + serverUrl);
    },
  };
}
