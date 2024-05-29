/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 02:49:43
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 02:49:44
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/globalwindow/useWindowListener.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect } from 'react';

export function useWindowListener(eventType: string, listener: EventListener) {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
