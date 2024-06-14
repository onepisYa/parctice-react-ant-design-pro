/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 01:40:35
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 01:56:03
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-row-list-exposing-multiple-components/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Row, RowList } from './RowList';

function MoreRows() {
  return (
    <>
      <Row>
        <p>this is more rows 1</p>
      </Row>
      <Row>
        <p>this is more rows 2</p>
        <p>
          这里使用 Children.map 得不到一样的结果，因为它会“认为” &#x3C;MoreRows&#x3E;
          只是一个单独的子节点（并且只占据了一行）。
        </p>
      </Row>
    </>
  );
}

export default function App() {
  return (
    <RowList>
      <Row>
        <p>This is the first item.</p>
      </Row>
      <Row>
        <p>This is the second item.</p>
      </Row>
      <Row>
        <p>This is the third item.</p>
      </Row>
      <MoreRows />
    </RowList>
  );
}
