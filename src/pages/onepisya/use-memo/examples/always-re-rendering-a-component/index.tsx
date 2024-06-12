/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-10 00:38:23
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-10 01:08:22
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/always-re-rendering-a-component/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import { Tab } from '../shared/types';
import { createTodos } from '../shared/utils';
import TodoList from './TodoList';

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState<Tab>('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setTab('all')}>
        All
      </button>
      <button type="button" onClick={() => setTab('active')}>
        Active
      </button>
      <button type="button" onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'} />
    </>
  );
}
