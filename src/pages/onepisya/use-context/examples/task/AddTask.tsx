/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 23:15:20
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:33:04
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/task/AddTask.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import { useTasksDispatch } from './TasksContext';

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
