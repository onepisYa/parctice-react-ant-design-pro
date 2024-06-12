/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-12 20:12:19
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 01:22:07
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/updating-state-from-a-memoized-callback/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { useState } from 'react';
import ProductPage from './ProductPage';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        Dark mode
      </label>
      <hr />
      <ProductPage referrer="wizard_of_oz" productId={123} theme={isDark ? 'dark' : 'light'} />
    </>
  );
}
