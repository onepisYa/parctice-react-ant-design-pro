/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 04:08:10
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 21:22:09
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/examples/UseImmerTodo.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useImmerReducer } from 'use-immer';
import AddTask from './todo/AddTask';
import type { Task, TaskAction } from './todo/index';
import styles from './todo/styles.less';
import TaskList from './todo/TaskList';

function tasksReducer(draft: Task[] | null, action: TaskAction): Task[] | null {
  if (draft === null) {
    return null;
  }
  switch (action.type) {
    case 'added': {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      } as Task);
      // break;
      return null;
    }
    case 'changed': {
      const index = draft?.findIndex((t) => t.id === action?.task?.id);
      draft[index] = action.task!;
      // break;
      return null;
    }
    case 'deleted': {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer<Task[] | null, TaskAction>(tasksReducer, initialTasks);

  function handleAddTask(text: Task['text']) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
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
    });
  }

  return (
    <>
      <div className={styles['onepisya-todo']}>
        <h1>Prague itinerary</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks!} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
      </div>
    </>
  );
}

let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
