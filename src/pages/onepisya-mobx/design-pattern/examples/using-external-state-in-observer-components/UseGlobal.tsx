/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 01:20:08
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 01:24:53
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/design-pattern/examples/using-external-state-in-observer-components/UseGlobal.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useTimer } from '@/pages/onepisya-mobx/helloworld/TimerView';
import { observer } from 'mobx-react';

export default () => {
  const myTimer = useTimer();
  // 没有props, `myTimer` 立刻变成了闭包。
  const TimerView = observer(() => <div>Seconds passed: {myTimer.secondsPassed}</div>);
  return <TimerView />;
};
