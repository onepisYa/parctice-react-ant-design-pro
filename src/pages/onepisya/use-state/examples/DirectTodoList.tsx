/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-28 03:03:07
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-28 03:07:04
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/DirectTodoList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('');
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}