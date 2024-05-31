/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 01:54:33
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 02:01:00
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/Page/Section.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useContext } from 'react';
import { LevelContext } from './LevelContext';
import styles from './styles.less';
export default function Section({ children }: { children: React.ReactNode }) {
  const level = useContext(LevelContext);
  return (
    <section className={styles.section}>
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </section>
  );
}
