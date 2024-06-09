/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 03:43:58
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:39:04
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/examples/todo/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Reducer, useReducer } from 'react';
import AddTask from './AddTask';
import styles from './styles.less';
import TaskList from './TaskList';

export type TaskAction = {
  type: string;
  id?: number;
  text?: string;
  task?: Task;
};

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'added': {
      //  ✅
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        } as Task,
      ];
    }
    case 'changed': {
      //  ✅
      return tasks.map((t) => {
        if (t.id === action?.task?.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      // ✅
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer<Reducer<Task[], TaskAction>>(tasksReducer, initialTasks);

  function handleAddTask(text: Task['text']) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    } as TaskAction);
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId: Task['id']) {
    dispatch({
      type: 'deleted',
      id: taskId,
    } as TaskAction);
  }

  return (
    <>
      <div className={styles['onepisya-todo']}>
        <h1>Prague itinerary</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
      </div>
    </>
  );
}
