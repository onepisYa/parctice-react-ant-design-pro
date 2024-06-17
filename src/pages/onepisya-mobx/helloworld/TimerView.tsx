/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 10:09:42
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 10:44:00
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/helloworld/TimerView.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

// 对应用状态进行建模。
export class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}
// 封装一个 useTimer hooks
export const useTimer = () => {
  const timer = new Timer();

  useEffect(() => {
    // 每秒更新一次‘已过秒数：X’中的文本。
    const id = setInterval(() => {
      timer.increase();
    }, 1000);
    console.log('start timer');

    return () => {
      console.log('clean up timer');
      // 离开页面时，清除计时器。
      clearInterval(id);
    };
  }, [timer]);

  return timer;
};

// ✅ 构建一个使用 observable 状态的“用户界面”。
// ✅ 围绕 React 组件 TimerView 的 observer 包装会自动侦测到依赖于 observable timer.secondsPassed 的渲染
// ✅ 即使这种依赖关系没有被明确定义出来。 响应性系统会负责在未来恰好那个字段被更新的时候将组件重新渲染。
const TimerView = observer(({ timer }: { timer: Timer }) => {
  return (
    <button type="button" onClick={() => timer.reset()}>
      已过秒数：{timer.secondsPassed}
    </button>
  );
});

const TimerViewBlock = () => {
  const timer = useTimer();
  return <TimerView timer={timer} />;
};

export default TimerViewBlock;
