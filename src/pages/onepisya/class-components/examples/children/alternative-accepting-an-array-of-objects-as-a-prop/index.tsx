/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 01:48:40
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 01:48:50
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/alternative-accepting-an-array-of-objects-as-a-prop/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { RowList } from './RowList';

export default function App() {
  return (
    <RowList
      rows={[
        { id: 'first', content: <p>这是第一项。</p> },
        { id: 'second', content: <p>这是第二项。</p> },
        { id: 'third', content: <p>这是第三项。</p> },
      ]}
    />
  );
}
