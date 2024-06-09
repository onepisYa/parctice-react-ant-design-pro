/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 03:46:32
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:19:59
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/examples/todo/AddTask.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import { Task } from './index';
export default function AddTask({ onAddTask }: { onAddTask: (text: Task['text']) => void }) {
  const [text, setText] = useState('');
  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
