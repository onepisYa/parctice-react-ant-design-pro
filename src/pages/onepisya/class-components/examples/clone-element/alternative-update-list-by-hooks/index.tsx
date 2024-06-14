/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 15:56:01
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 16:07:17
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/alternative-update-list-by-hooks/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { products } from '../update-list/data';
import Row from './Row';
import useList from './useList';

export default function App() {
  const [selected, onNext] = useList(products);
  return (
    <div className="List">
      {products.map((product) => (
        <Row key={product.id} title={product.title} isHighlighted={selected === product} />
      ))}
      <hr />
      <button type="button" onClick={onNext as () => void}>
        下一步
      </button>
    </div>
  );
}
