/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 11:25:19
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 11:32:59
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/alternative-update-list/List.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import type { Product } from '../update-list/data';
export default function List({
  items,
  renderItem,
}: {
  items: Product[];
  renderItem: (item: Product, isHighlighted: boolean) => React.ReactNode;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return renderItem(item, isHighlighted);
      })}
      <hr />
      <button
        type="button"
        onClick={() => {
          setSelectedIndex((i) => (i + 1) % items.length);
        }}
      >
        下一步
      </button>
    </div>
  );
}
