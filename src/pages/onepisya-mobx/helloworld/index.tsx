/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 10:03:10
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 11:01:52
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/helloworld/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../styles.less';
import TimerViewBlock from './TimerView';

export default function Hello() {
  return (
    <>
      <h1>Mobx</h1>
      <p>Mobx 例子</p>
      <div className={styles.container}>
        <div>
          <h2>Hello Mobx</h2>
          <TimerViewBlock />
          <span>
            <p>✅ 构建一个使用 observable 状态的“用户界面”。</p>
            <p>
              ✅ 围绕 React 组件 TimerView 的 observer 包装会自动侦测到依赖于 observable
              timer.secondsPassed 的渲染
            </p>
            <p>
              ✅ 即使这种依赖关系没有被明确定义出来。
              响应性系统会负责在未来恰好那个字段被更新的时候将组件重新渲染。
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
