/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 08:31:55
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 09:27:53
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/update-list/Row.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from './styles.less';

export type RowProps = {
  title: string;
  key: number;
  isHighlighted?: boolean;
};

export default function Row({ title, isHighlighted }: RowProps) {
  return (
    <div className={[styles['Row'], isHighlighted ? styles['RowHighlighted'] : ''].join(' ')}>
      {title}
    </div>
  );
}
