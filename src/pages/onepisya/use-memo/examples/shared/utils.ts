/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 21:56:40
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-10 00:28:46
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/shared/utils.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import type { Tab, Todo } from './types';

export function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: 'Todo ' + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

export function delay(
  id: string,
  content: string,
  items: any[],
  slow: boolean = true,
  delay: number = 500,
) {
  if (slow) {
    console.log('[ARTIFICIALLY SLOW] ' + id + ' ' + content + ' with ' + items.length + ' items');
    let startTime = performance.now();
    while (performance.now() - startTime < delay) {
      // Do nothing for 500 ms to emulate extremely slow code
    }
  }
}

export function filterTodos(todos: Todo[], tab: Tab, slow: boolean) {
  delay('Filtering', '<List />', todos, slow);

  return todos.filter((todo) => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  });
}
