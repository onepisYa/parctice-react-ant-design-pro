/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 17:32:28
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 17:39:39
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/PureComponent.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { PureComponent, useState } from 'react';

class Greeting extends PureComponent<{ name: string }> {
  render() {
    console.log('Greeting was rendered at', new Date().toLocaleTimeString());
    // 如果 this.props.name 存在 那么就可以渲染 逗号
    return (
      <h3>
        Hello{this.props.name && ', '}
        {this.props.name}!
      </h3>
    );
  }
}

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
      Address{': '} {address}
    </>
  );
}
