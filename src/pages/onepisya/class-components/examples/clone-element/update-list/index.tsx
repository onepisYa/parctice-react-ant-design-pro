/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 08:30:51
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 09:31:43
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/update-list/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { products } from './data';
import List from './List';
import Row from './Row';

export default function App() {
  const rProducts = products.map((product) => <Row key={product.id} title={product.title} />);
  return <List>{rProducts}</List>;
}
