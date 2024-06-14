/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 17:14:01
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 08:45:41
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/row-list/RowList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '@/pages/onepisya/class-components/examples/clone-element/update-list/styles.less';
import React, { Children } from 'react';

export default function RowList({ children }: { children: React.ReactNode[] }) {
  return (
    <div className={styles.RowList}>
      <h1 className={styles.RowListHeader}>Total rows: {Children.count(children)}</h1>
      {Children.map(children, (child) => (
        <div className={styles.Row}>{child}</div>
      ))}
    </div>
  );
}
