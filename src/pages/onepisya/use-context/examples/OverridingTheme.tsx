/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 01:46:50
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:58:07
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/OverridingTheme.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { createContext, useContext } from 'react';
import styles from './styles.less';
const ThemeContext = createContext('light');
function Button({ children }: { children: React.ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button type="button" className={styles[className]}>
      {children}
    </button>
  );
}

function Footer() {
  return (
    <footer>
      <Button>Settings</Button>
    </footer>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={styles[className]}>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <ThemeContext.Provider value="light">
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  );
}

export default function MyApp() {
  return (
    <div className={styles['onepisya-theme']}>
      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>
    </div>
  );
}
