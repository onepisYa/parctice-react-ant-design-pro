/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 16:23:41
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:21:16
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/Greeting.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Component } from 'react';

class Greeting extends Component<{ name: string }> {
  render() {
    return <h1>你好, {this.props.name}!</h1>;
  }
}

export default function App() {
  return (
    <>
      <Greeting name="Sara" />
      <Greeting name="Cahal" />
      <Greeting name="Edite" />
    </>
  );
}
