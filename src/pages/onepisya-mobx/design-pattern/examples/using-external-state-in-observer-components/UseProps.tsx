/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 01:10:01
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 01:19:11
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/design-pattern/examples/using-external-state-in-observer-components/use-props.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Timer, useTimer } from '@/pages/onepisya-mobx/helloworld/TimerView';
import { observer } from 'mobx-react-lite';

const TimerView = observer(({ timer }: { timer: Timer }) => (
  <div>Seconds passed: {timer.secondsPassed}</div>
));

export default function UsingProps() {
  const myTimer = useTimer();
  // 通过props传递myTimer.
  return <TimerView timer={myTimer} />;
}
