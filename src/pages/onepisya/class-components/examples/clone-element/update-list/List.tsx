/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 08:31:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 09:54:17
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/update-list/List.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Children, cloneElement, useState } from 'react';

export default function List({ children }: { children: React.ReactElement[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log('children', children);
  return (
    <div className="List">
      {/* ✅ 拿到 children 然后调用 Children 的 api */}
      {/* ❌ 这样带来的问题是、 isHighlighted 的来源不清楚、会导致代码难以理解 */}
      {Children.map(children, (child, index) =>
        // ✅ 拿到 child 然后调用 cloneElement 方法
        cloneElement(child, {
          isHighlighted: index === selectedIndex,
        }),
      )}
      <hr />
      {/* ✅ 通过 key 来优化、避免相同的 key 重新渲染 */}
      {/* ✅ 仅渲染 selectedIndex 变化的的元素 */}
      <button
        type="button"
        onClick={() => {
          setSelectedIndex((i) => (i + 1) % Children.count(children));
        }}
      >
        下一步
      </button>
    </div>
  );
}
