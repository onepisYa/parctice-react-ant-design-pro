import { useMemo } from 'react';
import styles from '../../styles.less';
import type { Tab, Theme, Todo } from '../shared/types';
import { filterTodos } from '../shared/utils';

export default function TodoList({ todos, theme, tab }: { todos: Todo[]; theme: Theme; tab: Tab }) {
  const visibleTodos: Todo[] = useMemo(() => filterTodos(todos, tab, true), [todos, tab]);
  return (
    <div className={styles[theme]}>
      {/* <div className={theme}> */}
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>

      <ul>
        {visibleTodos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'list-disc-outside' : 'list-circle-outside'}
          >
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
