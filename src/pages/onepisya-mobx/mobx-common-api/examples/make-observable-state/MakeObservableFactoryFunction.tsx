/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-15 21:03:20
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 21:04:51
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/mobx-common-api/examples/make-observable-state/MakeObservableFactoryFunction .tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';

function createDoubler(value: number) {
  // ✅
  return makeAutoObservable({
    value,
    get double() {
      return this.value * 2;
    },
    increment() {
      this.value++;
    },
  });
}

// React component
const DoublerUI: React.FC = () => {
  const [doubler] = useState(createDoubler(0));

  const handleIncrement = () => {
    doubler.increment();
  };

  return (
    <div>
      <p>Value: {doubler.value}</p>
      <p>Double: {doubler.double}</p>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};
export default observer(DoublerUI);
