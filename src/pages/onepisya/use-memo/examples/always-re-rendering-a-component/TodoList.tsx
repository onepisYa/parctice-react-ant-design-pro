/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-10 00:39:16
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-10 00:46:12
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/always-re-rendering-a-component/TodoList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../../styles.less';
import { Tab, Theme, Todo } from '../shared/types';
import { filterTodos } from '../shared/utils';
import List from './List';

export default function TodoList({ todos, theme, tab }: { todos: Todo[]; theme: Theme; tab: Tab }) {
  const visibleTodos = filterTodos(todos, tab, true);
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
