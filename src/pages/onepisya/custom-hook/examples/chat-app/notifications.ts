/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 16:27:22
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 16:39:41
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/chat-app/notifications.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showNotification(message: string, theme = 'dark') {
  Toastify({
    text: message,
    duration: 2000,
    gravity: 'top',
    position: 'right',
    style: {
      background: theme === 'dark' ? 'black' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
    },
  }).showToast();
}
