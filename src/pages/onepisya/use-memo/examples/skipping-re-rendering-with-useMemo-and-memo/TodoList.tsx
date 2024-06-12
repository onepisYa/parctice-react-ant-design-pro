/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 23:46:17
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-10 00:33:23
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/skipping-re-rendering-with-useMemo-and-memo/TodoList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useMemo } from 'react';
import styles from '../../styles.less';
import { Tab, Theme, Todo } from '../shared/types';
import { filterTodos } from '../shared/utils';
import List from './List';

export default function TodoList({ todos, theme, tab }: { todos: Todo[]; theme: Theme; tab: Tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab, true), [todos, tab]);
  return (
    <div className={styles[theme]}>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>
      <List items={visibleTodos} slow={true} />
    </div>
  );
}
