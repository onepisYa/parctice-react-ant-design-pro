/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 21:14:19
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 23:21:15
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/mobx-common-api/examples/make-observable-state/Observable.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';

// const todosById = observable({
//   'TODO-123': {
//     title: 'find a decent task management system',
//     done: false,
//   },
// });

// todosById['TODO-456'] = {
//   title: 'close all tickets older than two weeks',
//   done: true,
// };

// const tags = observable(['high prio', 'medium prio', 'low prio']);
// tags.push('prio: for fun');

// ---------------
type Todo = {
  id: string;
  title: string;
  done: boolean;
  tags: string[];
};

// State and Logic
// 创建一个待办事项 store
const todoStore = observable({
  todosById: {
    'TODO-123': {
      id: 'TODO-123',
      title: 'find a decent task management system',
      done: false,
      tags: [],
    },
  },
  tags: ['high prio', 'medium prio', 'low prio'],

  // 添加待办事项的方法
  addTodo: action((id: Todo['id'], title: Todo['title']) => {
    if (!todoStore.todosById[id]) {
      todoStore.todosById[id] = { id, title, done: false, tags: [] };
    }
  }),

  // 切换待办事项完成状态的方法
  toggleTodo: action((id: Todo['id']) => {
    const todo = todoStore.todosById[id];
    if (todo) {
      todo.done = !todo.done;
    }
  }),

  // 为待办事项添加标签的方法
  addTagToTodo: action((id: Todo['id'], tag: Todo['tags']) => {
    const todo = todoStore.todosById[id];
    if (todo && !todo.tags.includes(tag)) {
      todo.tags.push(tag);
    }
  }),

  // 删除待办事项的方法
  deleteTodo: action((id: Todo['id']) => {
    delete todoStore.todosById[id];
  }),

  // 获取所有待办事项的方法
  getTodos: () => {
    return Object.values(todoStore.todosById);
  },
});

// usage
// 使用 store 添加待办事项
// todoStore.addTodo('TODO-456', 'close all tickets older than two weeks');

// 查看所有待办事项
// console.log(todoStore.getTodos());

// 切换待办事项的状态
// todoStore.toggleTodo('TODO-123');

// 为待办事项添加标签
// todoStore.addTagToTodo('TODO-456', 'urgent');

// 再次查看所有待办事项
// console.log(todoStore.getTodos());

// 删除待办事项
// todoStore.deleteTodo('TODO-456');

// 查看删除后的待办事项列表
// console.log(todoStore.getTodos());

// UI
// React Component
const TodoList = observer(({ store }: { store: any }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = () => {
    if (newTodoTitle.trim() !== '') {
      store.addTodo(`TODO-${Date.now()}`, newTodoTitle);
      setNewTodoTitle('');
    }
  };
  const addTag = (id: string) => {
    store.addTagToTodo(id, prompt('Enter tag', 'tag'));
  };

  return (
    <div>
      <h2>Todo List MobX Demo</h2>
      <ul>
        {store.getTodos().map((todo: Todo) => (
          <li key={todo.id}>
            <div className="mb-1">
              <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.title}
              </span>{' '}
              <button type="button" onClick={() => addTag(todo.id)}>
                add tag
              </button>
              <button type="button" onClick={() => store.toggleTodo(todo.id)}>
                {todo.done ? 'Undo' : 'Done'}
              </button>
              <button type="button" onClick={() => store.deleteTodo(todo.id)}>
                Delete
              </button>
            </div>

            <ul className="h-4 mb-4 flex flex-wrap font-medium text-center border-b text-gray-400">
              {todo.tags.map((tag) => (
                <li
                  className="me-1 p-1 border-b border-gray-400 border-solid inline-block rounded-lg"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="button" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
});

export default () => {
  return (
    <>
      <TodoList store={todoStore} />
    </>
  );
};
