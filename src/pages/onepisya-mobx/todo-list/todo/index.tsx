/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 14:05:12
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 21:10:56
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/todo-list/todo/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { observer } from 'mobx-react';
import React from 'react';
import styles from '../../styles.less';
import type { ObservableTodoStore, Task } from './stores/index';
import observableTodoStore from './stores/index';

const RenderCounter = function () {
  const _c = React.useRef(0);
  return React.createElement(
    'div',
    { className: styles['render-counter'] + ' ' + (++_c.current % 2 ? styles['odd'] : ['even']) },
    _c.current,
  );
};

const TodoView = observer(({ todo }: { todo: Task }) => {
  const onToggleCompleted = () => {
    observableTodoStore.toggleTodoCompleted(todo);
  };

  const onRename = () => {
    observableTodoStore.renameTodo(todo);
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        className="mr-1"
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
      <RenderCounter />
    </li>
  );
});

const TodoList = observer(({ store }: { store: ObservableTodoStore }) => {
  const onNewTodo = () => {
    store.addTodo(prompt('输入新的待办：', '请来杯咖啡')!);
  };

  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      <div className="h-5">
        {store.pendingRequests > 0 ? <span className="h-full">正在加载……</span> : null}
      </div>
      <button type="button" onClick={onNewTodo}>
        新待办
      </button>
      <button type="button" onClick={() => store.simulationAsyncAddTodo()}>
        模拟异步添加待办
      </button>
      <small>（双击待办进行编辑）</small>
      <RenderCounter />
    </div>
  );
});

export default function Todo() {
  return <TodoList store={observableTodoStore} />;
}
