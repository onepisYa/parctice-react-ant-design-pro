/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 01:46:32
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 01:52:24
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/design-pattern/examples/using-local-observable-state-in-observer-components/UseStateAndObservableCls.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useTimer } from '@/pages/onepisya-mobx/helloworld/TimerView';

import { observer } from 'mobx-react-lite';
import { useState } from 'react';

export default () => {
  const t = useTimer();
  const [timer] = useState(() => t); // Timer的定义在上面（正如上面所说的那样这里我们忽略了更新方法的定义·译者注）。
  const TimerView = observer(() => {
    return <div>Seconds passed: {timer.secondsPassed}</div>;
  });
  return <TimerView />;
};
