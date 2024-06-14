/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 13:20:38
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 13:34:54
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/alternative-update-list-by-context/Row.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useContext } from 'react';
import styles from '../update-list/styles.less';
import { HighlightContext } from './HighlightContext';

export default function Row({ title }: { title: string }) {
  const isHighlighted = useContext(HighlightContext);
  return (
    <div className={[styles['Row'], isHighlighted ? styles['RowHighlighted'] : ''].join(' ')}>
      {title}
    </div>
  );
}
