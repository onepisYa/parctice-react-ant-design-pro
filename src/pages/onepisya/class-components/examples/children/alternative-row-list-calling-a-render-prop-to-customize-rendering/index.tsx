/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 02:12:07
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 08:32:59
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-row-list-calling-a-render-prop-to-customize-rendering/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Row, RowList } from './RowList';

export default function App() {
  return (
    <RowList
      rowIds={['first', 'second', 'third']}
      renderRow={(id, index) => {
        return (
          <Row isHighlighted={index % 2 === 0}>
            <p>This is the {id} item.</p>
          </Row>
        );
      }}
    />
  );
}
