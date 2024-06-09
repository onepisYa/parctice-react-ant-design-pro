/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 23:14:32
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:40:33
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/task/TasksContext.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Context, createContext, Dispatch, useContext, useReducer } from 'react';

export type Task = { id: number; text: string; done: boolean } | null;
export type Action = { type: string; [k: string]: any };

const TasksContext: Context<Task[]> = createContext(null as unknown as Task[]);
const TasksDispatchContext: Context<Dispatch<Action>> = createContext(
  null as unknown as Dispatch<Action>,
);

function tasksReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t?.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t?.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks: Task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
