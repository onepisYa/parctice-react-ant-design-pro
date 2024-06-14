/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 01:48:59
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 08:47:32
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-accepting-an-array-of-objects-as-a-prop/RowList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '@/pages/onepisya/class-components/examples/clone-element/update-list/styles.less';
export function RowList({
  rows,
}: {
  rows: {
    id: string;
    content: JSX.Element[] | JSX.Element;
  }[];
}) {
  return (
    <div className={styles.RowList}>
      {rows.map((row) => (
        <div className={styles.Row} key={row.id}>
          {row.content}
        </div>
      ))}
    </div>
  );
}
