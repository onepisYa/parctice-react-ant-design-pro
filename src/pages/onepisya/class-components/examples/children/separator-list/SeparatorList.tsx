/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 16:54:59
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 17:06:14
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/separator-list/SeparatorList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import React, { Children } from 'react';

interface SeparatorListProps {
  children: React.ReactNode;
}

export default function SeparatorList({ children }: SeparatorListProps): JSX.Element {
  const result: JSX.Element[] = [];
  Children.forEach(children, (child, index) => {
    result.push(child as JSX.Element);
    result.push(<hr key={index} />);
  });
  result.pop(); // Remove the last separator
  return <>{result}</>;
}
