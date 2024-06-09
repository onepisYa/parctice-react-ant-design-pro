/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 03:46:55
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:30:25
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/examples/todo/TaskList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import type { Task as TaskType } from './index';

function Task({
  task,
  onChange,
  onDelete,
}: {
  task: TaskType;
  onChange: (task: TaskType) => void;
  onDelete: (id: TaskType['id']) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
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
        {task.text}
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
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
}

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: TaskType[];
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (id: TaskType['id']) => void;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
