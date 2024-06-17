/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 02:02:15
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 02:07:09
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/design-pattern/examples/using-local-observable-state-in-observer-components/MobxUseLocalObservable.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { observer, useLocalObservable } from 'mobx-react-lite';

const TimerView = observer(() => {
  // ✅
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    increaseTimer() {
      this.secondsPassed++;
    },
  }));
  return (
    <>
      <div>Seconds passed: {timer.secondsPassed}</div>
      <button className="block" type="button" onClick={() => timer.increaseTimer()}>
        increaseTimer
      </button>
    </>
  );
});

export default TimerView;
