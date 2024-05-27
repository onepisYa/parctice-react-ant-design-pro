/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 02:31:24
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-27 02:40:08
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/TaskApp/AddTodo.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
export type Todo = {
  id: number;
  title: string;
  done: boolean;
};
export default function AddTodo({ onAddTodo }: { onAddTodo: (title: Todo['title']) => void }) {
  const [title, setTitle]: [Todo['title'], (title: Todo['title']) => void] = useState('');
  return (
    <>
      <input placeholder="Add todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}
