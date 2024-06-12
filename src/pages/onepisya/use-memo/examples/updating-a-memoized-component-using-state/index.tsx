/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-12 13:03:05
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-12 14:23:28
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/updating-a-memoized-component-using-state/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { memo, useState } from 'react';

// ✅  将父组件的 state 和 setState 通过 props 传递给 子组件
// 子组件 定义 props 进行接收、然后在内部进行使用。
function GreetingSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <label className="block">
        <input
          type="radio"
          name="hello"
          checked={value === 'Hello'}
          onChange={() => onChange('Hello')}
        />
        Regular greeting
      </label>
      <label className="block">
        <input
          type="radio"
          name="hello"
          checked={value === 'Hello and Welcome'}
          onChange={() => onChange('Hello and Welcome')}
        />
        Enthusiastic greeting
      </label>
    </>
  );
}

const Greeting = memo(function Greeting({ name }: { name: string }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState('Hello');
  return (
    <>
      <h3>
        {greeting}
        {name && ', '}
        {name}!
      </h3>
      {/*  ✅  将父组件的 state 和 setState 通过 props 传递给 子组件 */}
      <GreetingSelector value={greeting} onChange={setGreeting} />
    </>
  );
});

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label className="block">
        Name{': '}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="block">
        Address{': '}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
      {/*  ✅  将此组件的 state 通过 props 传递给 子组件 */}
    </>
  );
}
