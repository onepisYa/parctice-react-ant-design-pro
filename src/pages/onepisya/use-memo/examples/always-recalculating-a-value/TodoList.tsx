/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 22:30:46
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-10 00:33:45
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/always-recalculating-a-value/TodoList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../../styles.less';
import type { Tab, Theme, Todo } from '../shared/types';
import { filterTodos } from '../shared/utils';

export default function TodoList({ todos, theme, tab }: { todos: Todo[]; theme: Theme; tab: Tab }) {
  const visibleTodos: Todo[] = filterTodos(todos, tab, true);
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
