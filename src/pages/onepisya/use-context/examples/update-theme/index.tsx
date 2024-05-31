/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 17:32:59
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 18:13:18
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/update-theme/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Context, createContext, ReactNode, useContext, useState } from 'react';
import styles from '../styles.less';

type MyContext = null | string;
const ThemeContext: Context<MyContext> = createContext(null as MyContext);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={styles['onepisya-theme']}>
      <ThemeContext.Provider value={theme}>
        {/* ✅  Provider  */}
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
      </ThemeContext.Provider>
    </div>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={styles[className]}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }: { children: ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={styles[className]}>{children}</button>;
}
