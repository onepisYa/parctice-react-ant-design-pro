/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 02:12:54
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 08:40:26
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-row-list-calling-a-render-prop-to-customize-rendering/RowList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '@/pages/onepisya/class-components/examples/clone-element/update-list/styles.less';
import { Fragment } from 'react';

export function RowList({
  rowIds,
  renderRow,
}: {
  rowIds: string[];
  renderRow: (rowId: string, index: number) => JSX.Element | JSX.Element[];
}) {
  return (
    <div className="RowList">
      <h1 className="RowListHeader">Total rows: {rowIds.length}</h1>
      {rowIds.map((rowId, index) => (
        <Fragment key={rowId}>{renderRow(rowId, index)}</Fragment>
      ))}
    </div>
  );
}

export function Row({
  children,
  isHighlighted,
  // ...otherProps
}: {
  children: JSX.Element | JSX.Element[];
  isHighlighted: boolean;
  // otherProps?: any;
}) {
  return (
    <div className={[styles['Row'], isHighlighted ? styles['RowHighlighted'] : ''].join(' ')}>
      {children}
    </div>
  );
}
