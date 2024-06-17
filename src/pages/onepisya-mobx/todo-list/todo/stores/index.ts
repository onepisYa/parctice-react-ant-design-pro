/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 14:05:24
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 21:06:16
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/todo-list/todo/stores/index.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { action, autorun, computed, makeObservable, observable } from 'mobx';
// makeAutoObservable
// import { observer } from 'mobx-react';
export type Task = {
  task: string;
  assignee: any;
  completed: boolean;
};
// ✅ 响应式状态
export class ObservableTodoStore {
  todos: Task[] = [];
  pendingRequests = 0;

  constructor() {
    // ✅ 我们为了刻意地展示出注解而使用了 makeObservable，
    // ✅ 但我们也可以改用 makeAutoObservable(this) 来简化这个过程。
    makeObservable(this, {
      // ✅ 通过使用 observable 和 computed 注解，我们可以为一个对象引入 observable 属性
      todos: observable,
      pendingRequests: observable,
      // ✅ 我们把有些属性标记为 observable，
      // 以便告诉 Mobx 这些值会随时间的推移而改变。
      // 有些值中的 computed 用来标明这些值能够从状态中被派生出来，
      // 而且只要底层状态没有发生改变，那么它们还可以从缓存中被派生出来。
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
      toggleTodoCompleted: action,
    });
    autorun(() => console.log('report', this.report));
    // 而 autorun 会创建一个 action，这个 action 会先自动运行一次，
    // 之后每当小函数用到的任意一个 observable 数据发生了改变，它也会自动重新运行。
    // report 会因为使用了 observable 属性 todos 而适时打印出 report
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }
  // 响应式、一旦状态改变、report 触发、通过 autorun
  get report() {
    if (this.todos.length === 0) return '<无>';
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `下一个待办："${nextTodo ? nextTodo.task : '<无>'}"。 ` +
      `进度：${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task: string) {
    // ✅ 直接操作
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
  renameTodo(todo: Task) {
    todo.task = prompt('任务名称', todo.task) || todo.task;
  }

  toggleTodoCompleted = (todo: Task) => {
    todo.completed = !todo.completed;
  };
  // <button onclick="observableTodoStore.pendingRequests++; setTimeout(function() { observableTodoStore.addTodo('Random Todo ' + Math.random()); observableTodoStore.pendingRequests--;  }, 2000);">Load todo</button>
  simulationAsyncAddTodo() {
    console.log(this);

    this.pendingRequests += 1;
    const id = setTimeout(
      action(() => {
        this.addTodo('Random Todo ' + Math.random());
        this.pendingRequests -= 1;
        clearTimeout(id);
      }),
      2000,
    );
  }
}

const observableTodoStore = new ObservableTodoStore();

// ✅ 例子
// observableTodoStore.addTodo("阅读 MobX 教程");
// observableTodoStore.addTodo("试用 MobX");
// observableTodoStore.toggleTodoCompleted(observableTodoStore.todos[0])

export default observableTodoStore;
