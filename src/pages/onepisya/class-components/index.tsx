/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 17:45:05
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import ChatRoomBox from './examples/chat-room';
import CounterBox from './examples/Counter';
import GreetingBox from './examples/Greeting';
import PureComponentBox from './examples/PureComponent';
import styles from './styles.less';

export default function UseStateExample() {
  return (
    <>
      <h1>自定义 Hook</h1>
      <p>自定义 Hook 例子</p>
      <div className={styles.container}>
        <div>
          <h2> 定义类式组件 : Greeting </h2>
          <GreetingBox />
        </div>
        <div>
          <h2>向类式组件添加 state : Counter</h2>
          <CounterBox />
        </div>
        <div>
          <h2>向类式组件中添加生命周期方法</h2>
          <ChatRoomBox />
        </div>
        <div>
          <h2>PureComponent类组件 类似 函数式中的 memo 。 以及 完全兼容所有的 Component 类组件</h2>
          <span>
            <p>你们会发现 PureComponent 会忽略更新 Adress 、</p>
            <p>因为 Greeting 组件的 props 只有 name、没有 address</p>
            <p>
              并且在 父组件更新的时候、也不会更新子组件、只要子组件的 props 或者 state 没有改变、
              context 改变、会导致 PureComponent 重渲染
            </p>
          </span>
          <PureComponentBox />
        </div>
      </div>
    </>
  );
}
