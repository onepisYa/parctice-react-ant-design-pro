/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-12 14:16:52
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-12 15:03:34
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/updating-a-memoized-component-using-a-context /index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { createContext, memo, useContext, useState } from 'react';
import styles from '../../styles.less';

const ThemeContext = createContext<string | null>(null);
// Greeting 即使 使用了 memo 如果 context 改变也会重新渲染
const Greeting = memo(function Greeting({ name }: { name: string }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  const theme = useContext(ThemeContext)!;
  return <h3 className={styles[theme]}>Hello, {name}!</h3>;
});

export default function MyApp() {
  const [theme, setTheme] = useState('dark');

  function handleClick() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <button type="button" onClick={handleClick}>
        Switch theme
      </button>
      <Greeting name="Taylor" />
    </ThemeContext.Provider>
  );
}
