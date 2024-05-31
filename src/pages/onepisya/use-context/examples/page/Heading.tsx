/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 01:55:26
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 01:57:55
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/Page/Heading.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useContext } from 'react';
import { LevelContext } from './LevelContext';

export default function Heading({ children }: { children: React.ReactNode }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
