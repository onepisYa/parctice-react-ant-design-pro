/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 04:21:05
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:18:30
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/examples/TodoInit.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Reducer, useReducer } from 'react';

export type Todo = {
  id: number;
  text: string;
};
export type State = {
  draft: string;
  todos: Todo[];
};
export type Action = {
  type: 'changed_draft' | 'added_todo';
  nextDraft?: string;
  // ✅  关键点、不能让它是 undefined
};

function createInitialState(username: string) {
  const initialTodos = [];
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
        draft: action.nextDraft!,
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
  const [state, dispatch] = useReducer<Reducer<State, Action>, string>(
    reducer,
    username,
    createInitialState,
  );
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
        type="button"
        onClick={() => {
          dispatch({ type: 'added_todo' } as Action);
        }}
      >
        Add
      </button>
      <div>
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
