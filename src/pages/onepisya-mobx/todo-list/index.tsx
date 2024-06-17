/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 10:03:10
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 23:48:33
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/todo-list/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../styles.less';
import EasyTodoList from '../todo-list/easy-todo/index';
import TodoList from '../todo-list/todo/index';

export default function Hello() {
  return (
    <>
      <h1>Mobx</h1>
      <p>Mobx 例子 Todo</p>
      <div className={styles.container}>
        <div className="w-600px">
          <h2>Mobx Todo example</h2>
          <TodoList />
        </div>

        <div>
          <h2>Mobx Todo example (easy)</h2>
          <EasyTodoList />
        </div>
      </div>
    </>
  );
}
