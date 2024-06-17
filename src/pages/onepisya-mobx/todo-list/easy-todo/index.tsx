/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 21:52:09
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 00:11:52
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/todo-list/easy-todo/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { action, computed, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title: string) {
    // ✅
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos: Todo[] = [];
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }
}
const TodoView = observer(({ todo }: { todo: Todo }) => (
  <li>
    <input type="checkbox" checked={todo.finished} onChange={() => todo.toggle()} />
    {todo.title}
  </li>
));

const TodoListView = observer(({ todoList }: { todoList: TodoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo: Todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
  </div>
));

const store = new TodoList([new Todo('Get Coffee'), new Todo('Write simpler code')]);

export default function TodoPage() {
  return <TodoListView todoList={store} />;
}
