/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 19:49:20
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-16 10:57:35
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/mobx-common-api/examples/make-observable-state/MakeObservable.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { action, computed, flow, makeObservable, observable, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';

type Todo = {
  completed: boolean | null;
  id: number | null;
  title: string | null;
  userId: number | null;
};
// store
class Doubler {
  value: number;
  todo: Todo | null = null;
  todoLoading: boolean = false;

  constructor(value: number) {
    makeObservable(this, {
      value: observable, // 响应式数据 注解
      todo: observable, // 响应式数据 注解
      todoLoading: observable,
      double: computed, // computed
      increment: action, // action 类型
      fetch: flow, // flow 类型 generator functions 都成为 flow
      // flow 包装器是一个可选的 async / await 替代方案，它让 MobX action 使用起来更加容易。
      // flow 将一个 generator 函数 作为唯一输入。 在 generator 内部，你可以使用 yield 串联 Promise（使用 yield somePromise 代替 await somePromise）。 flow 机制将会确保 generator 在 Promise resolve 之后继续运行或者抛出错误。
      toggleTodoCompleted: action,
      toggleTodoLoading: action,
      setTodoLoading: action,
      setTodo: action,
    });
    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }

  toggleTodoCompleted() {
    if (this.todo) {
      this.todo.completed = !this.todo?.completed;
    }
  }

  toggleTodoLoading() {
    this.setTodoLoading(!this.todoLoading);
  }

  setTodoLoading(loading: boolean) {
    this.todoLoading = loading;
  }
  setTodo(todo: Todo) {
    this.todo = todo;
  }

  *fetch() {
    // ✅ fetch 中 Promoise 的所有处理函数、最好都直接 定义成 action 或者 使用 aciton  包装下。
    // 当然如果使用 了 makeAutoObservable 自动包装类字段为 action：通常使用箭头函数来定义
    // 另外也可以方便的使用 runInAction 来一次性包装

    this.setTodoLoading(true);
    const response: Response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todoPromise = response.json() as Promise<Todo>;
    todoPromise
      .then((todo) => {
        this.setTodo(todo);
        runInAction(()=>console.log(todo))
      })
      .catch((err) => {

        runInAction(()=>console.error(err))
      })
      .finally(() => {
        this.setTodoLoading(false);
      });
  }
}

// React component
const DoublerUI: React.FC = () => {
  const [doubler] = useState(new Doubler(0));

  const handleIncrement = () => {
    doubler.increment();
  };

  const handleFetch = () => {
    doubler.fetch();
  };

  return (
    <div>
      <p>Value: {doubler.value}</p>
      <p>Double: {doubler.double}</p>
      <p>todo is loading: {doubler.todoLoading ? 'true' : 'false'}</p>
      <ul>
        {doubler.todo && (
          <>
            <input
              className="mr-1"
              type="checkbox"
              checked={!!doubler.todo.completed}
              onChange={() => doubler.toggleTodoCompleted()}
            />
            <span>{doubler.todo.title}</span>{' '}
            <span className="text-gray">
              {doubler.todo.completed ? 'completed' : 'not completed'}
            </span>
          </>
        )}
      </ul>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleFetch} disabled={doubler.todoLoading}>
        Fetch and Set Value
      </button>
    </div>
  );
};

export default observer(DoublerUI);
