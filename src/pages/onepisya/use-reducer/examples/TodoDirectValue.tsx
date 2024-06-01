/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 18:28:50
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 19:36:53
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/examples/TodoDirectValue.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Reducer, useReducer } from 'react';
import type { Action, State, Todo } from './TodoInit';

function createInitialState(username: string) {
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1),
    });
  }
  return {
    draft: '',
    todos: initialTodos,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changed_draft': {
      return {
        draft: action.nextDraft!, // 关键点 ✅  不能是 undefined
        todos: state.todos,
      };
    }
    case 'added_todo': {
      return {
        draft: '',
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

function TodoList({ username }: { username: string }) {
  // ❌ 使用的是直接的值、而不是传递的 一个初始化函数。
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    createInitialState(username),
  );
  // ✅ 下面这种更好。不会每次重新渲染都执行 createInitialState 函数。
  // const [state, dispatch] = useReducer(reducer, username, createInitialState);
  return (
    <>
      <input
        value={state.draft}
        onChange={(e) => {
          dispatch({
            type: 'changed_draft',
            nextDraft: e.target.value,
          } as Action);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'added_todo' } as Action);
        }}
      >
        Add
      </button>
      <div>
        {' '}
        <ul style={{ listStyle: 'unset' }}>
          {state.todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function App() {
  return <TodoList username="Taylor" />;
}
