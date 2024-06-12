/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-10 22:40:28
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-11 00:02:09
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/skipping-re-rendering-when-props-are-unchanged/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { memo, useState } from 'react';

const Greeting = memo(function Greeting({ name }: { name: string }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ', '}
      {name}!
    </h3>
  );
});

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}
