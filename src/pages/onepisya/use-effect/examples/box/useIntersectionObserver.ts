/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 03:01:23
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 03:03:42
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/box/useIntersectionObserver.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { MutableRefObject, useEffect, useState } from 'react';

export function useIntersectionObserver(ref: MutableRefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const div = ref.current as HTMLDivElement;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 1.0,
      },
    );
    observer.observe(div);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
