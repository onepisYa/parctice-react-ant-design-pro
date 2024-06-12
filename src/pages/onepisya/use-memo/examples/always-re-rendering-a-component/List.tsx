/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 23:46:58
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-10 00:41:32
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/always-re-rendering-a-component/List.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Todo } from '../shared/types';
import { delay } from '../shared/utils';

function List({ items, slow }: { items: Todo[]; slow: boolean }) {
  delay('Rendering', '<List />', items, slow);
  return (
    <ul>
      {items.map((item) => (
        <li className={item.completed ? 'list-disc-outside' : 'list-circle-outside'} key={item.id}>
          {item.completed ? <s>{item.text}</s> : item.text}
        </li>
      ))}
    </ul>
  );
}

export default List;
