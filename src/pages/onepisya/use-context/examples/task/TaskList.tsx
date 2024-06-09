/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 23:15:38
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:25:46
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/task/TaskList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import type { Task as TaskType } from './TasksContext';
import { useTasks, useTasksDispatch } from './TasksContext';

function Task({ task }: { task: TaskType }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task?.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button type="button" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task?.text}
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task?.done}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task?.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task?.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
