import { useState } from 'react';
import type { Tab } from '../shared/types';
import { createTodos } from '../shared/utils';
import TodoList from './TodoList';

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState<Tab>('all');
  const [isDark, setIsDark] = useState<boolean>(false);
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
