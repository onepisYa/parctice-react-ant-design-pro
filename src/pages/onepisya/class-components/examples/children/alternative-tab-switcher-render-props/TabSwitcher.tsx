/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 02:05:48
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 02:14:05
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-tab-switcher-render-props/TabSwitcher.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';

export default function TabSwitcher({
  tabIds,
  getHeader,
  renderContent,
}: {
  tabIds: string[];
  getHeader: (tabId: string) => string;
  renderContent: (tabId: string) => JSX.Element;
}) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  return (
    <>
      {tabIds.map((tabId) => (
        <button type="button" key={tabId} onClick={() => setSelectedId(tabId)}>
          {getHeader(tabId)}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{getHeader(selectedId)}</h3>
        {renderContent(selectedId)}
      </div>
    </>
  );
}
