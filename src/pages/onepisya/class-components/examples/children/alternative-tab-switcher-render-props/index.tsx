/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 02:05:32
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 02:08:27
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-tab-switcher-render-props/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import TabSwitcher from './TabSwitcher';

export default function App() {
  return (
    <TabSwitcher
      tabIds={['first', 'second', 'third']}
      getHeader={(tabId) => {
        return tabId[0].toUpperCase() + tabId.slice(1);
      }}
      renderContent={(tabId) => {
        return <p>This is the {tabId} item.</p>;
      }}
    />
  );
}
