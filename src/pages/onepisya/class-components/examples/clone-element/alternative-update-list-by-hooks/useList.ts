/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 15:56:35
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 16:02:11
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/alternative-update-list-by-hooks/useList.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import type { Product } from '../update-list/data';

export default function useList(items: Product[]) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onNext(): void {
    setSelectedIndex((i) => (i + 1) % items.length);
  }

  const selected = items[selectedIndex];
  return [selected, onNext];
}
