/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 08:30:51
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 13:16:34
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/alternative-update-list-by-props/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { products } from '../update-list/data';
import Row from '../update-list/Row';
import List from './List';

export default function App() {
  return (
    <List
      items={products}
      renderItem={(product, isHighlighted) => (
        <Row key={product.id} title={product.title} isHighlighted={isHighlighted} />
      )}
    />
  );
}
