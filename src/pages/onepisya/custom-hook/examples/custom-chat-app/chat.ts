/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 16:27:00
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 16:39:23
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/chat-app/chat.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
export function createConnection({ serverUrl, roomId }: { serverUrl: string; roomId: string }) {
  // 真正的实现会实际连接到服务器
  if (typeof serverUrl !== 'string') {
    throw Error('Expected serverUrl to be a string. Received: ' + serverUrl);
  }
  if (typeof roomId !== 'string') {
    throw Error('Expected roomId to be a string. Received: ' + roomId);
  }
  let intervalId: string | number | NodeJS.Timeout | undefined;
  let messageCallback: ((message: string) => void) | null;
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (messageCallback) {
          if (Math.random() > 0.5) {
            messageCallback('hey');
          } else {
            messageCallback('lol');
          }
        }
      }, 3000);
    },
    disconnect() {
      clearInterval(intervalId);
      messageCallback = null;
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl + '');
    },
    on(event: string, callback: (message: string) => void) {
      if (messageCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'message') {
        throw Error('Only "message" event is supported.');
      }
      messageCallback = callback;
    },
  };
}
