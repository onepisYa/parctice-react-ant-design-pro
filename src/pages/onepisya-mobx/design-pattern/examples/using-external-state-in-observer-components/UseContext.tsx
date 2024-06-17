/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 01:26:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 01:44:56
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/design-pattern/examples/using-external-state-in-observer-components/UseContext.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Timer, useTimer } from '@/pages/onepisya-mobx/helloworld/TimerView';
import { observer } from 'mobx-react';
import type { Context } from 'react';
import { createContext, useContext } from 'react';

type MaybeNullTimer = Timer | null;
const TimerContext: Context<MaybeNullTimer> = createContext(null as MaybeNullTimer);
const TimerView = observer(() => {
  // 从context中获取timer.
  const timer = useContext(TimerContext); // 可以在上面查看 Timer的定义。
  return <div>Seconds passed: {timer?.secondsPassed}</div>;
});

export default () => {
  const timer = useTimer();
  return (
    <TimerContext.Provider value={timer}>
      <TimerView />
    </TimerContext.Provider>
  );
};
