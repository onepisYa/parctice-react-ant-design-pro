/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 01:57:11
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 02:00:44
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/tab-switcher/TabSwitcher.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';

export default function TabSwitcher({
  tabs,
}: {
  tabs: {
    id: string;
    header: string;
    content: JSX.Element[] | JSX.Element;
  }[];
}) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs.find((tab) => tab.id === selectedId)!;
  return (
    <>
      {tabs.map((tab) => (
        <button type="button" key={tab.id} onClick={() => setSelectedId(tab.id)}>
          {tab.header}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{selectedTab.header}</h3>
        {selectedTab.content}
      </div>
    </>
  );
}
