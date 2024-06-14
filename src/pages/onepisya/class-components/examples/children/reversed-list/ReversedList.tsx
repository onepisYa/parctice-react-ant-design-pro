/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 17:36:22
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 01:34:15
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/reversed-list/ReversedList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Children } from 'react';

export default function ReversedList({ children }: { children: JSX.Element[] }) {
  const result = Children.toArray(children);
  result.reverse();
  return <>{result}</>;
}
