/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 02:32:06
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:28:31
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/TaskApp/TaskList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';
import type { Todo } from './AddTodo';

function Task({
  todo,
  onChange,
  onDelete,
}: {
  todo: Todo;
  onChange: (todo: Todo) => void;
  onDelete: (id: Todo['id']) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button type="button" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
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
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button type="button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: {
  todos: Todo[];
  onChangeTodo: (todo: Todo) => void;
  onDeleteTodo: (id: Todo['id']) => void;
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
