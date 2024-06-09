/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-28 03:11:49
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:28:48
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/KeyForm.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}

export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <Form key={version} />
    </>
  );
}
