/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 01:21:11
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:18:13
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/Form.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}
