/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 01:56:57
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 01:56:58
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/tab-switcher/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import TabSwitcher from './TabSwitcher';

export default function App() {
  return (
    <TabSwitcher
      tabs={[
        {
          id: 'first',
          header: 'First',
          content: <p>这是第一项。</p>,
        },
        {
          id: 'second',
          header: 'Second',
          content: <p>这是第二项。</p>,
        },
        {
          id: 'third',
          header: 'Third',
          content: <p>这是第三项。</p>,
        },
      ]}
    />
  );
}
