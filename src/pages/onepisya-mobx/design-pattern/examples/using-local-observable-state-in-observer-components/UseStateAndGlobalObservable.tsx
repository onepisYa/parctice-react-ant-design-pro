/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 01:55:42
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 02:00:22
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/design-pattern/examples/using-local-observable-state-in-observer-components/UseStateAndGlobalObservable.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';

const TimerView = observer(() => {
  const [timer] = useState(() =>
    observable({
      secondsPassed: 0,
      increaseTimer() {
        this.secondsPassed++;
      },
    }),
  );
  return (
    <>
      <div>Seconds passed: {timer.secondsPassed}</div>
      <button type="button" onClick={() => timer.increaseTimer()}>
        increaseTimer
      </button>
    </>
  );
});

export default TimerView;
