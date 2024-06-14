/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 01:40:51
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 08:46:57
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-row-list-exposing-multiple-components/RowList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '@/pages/onepisya/class-components/examples/clone-element/update-list/styles.less';
export function RowList({ children }: { children: JSX.Element[] | JSX.Element }) {
  return <div className={styles.RowList}>{children}</div>;
}

export function Row({ children }: { children: JSX.Element[] | JSX.Element }) {
  return <div className={styles.Row}>{children}</div>;
}
