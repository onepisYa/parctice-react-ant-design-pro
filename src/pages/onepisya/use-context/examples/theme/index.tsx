/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 17:19:32
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:54:15
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/theme/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Context, createContext, ReactNode, useContext } from 'react';
import styles from '../styles.less';

type MyContext = null | string;
const ThemeContext: Context<MyContext> = createContext(null as MyContext);
// ✅ 1. 创建上下文
function Panel({ title, children }: { title: string; children: ReactNode }) {
  // ✅  使用上下文
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
  // ✅  使用上下文
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button type="button" className={styles[className]}>
      {children}
    </button>
  );
}

function Form() {
  return (
    <div className={styles['onepisya-theme']}>
      <Panel title="Welcome">
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Panel>
    </div>
  );
}

export default function MyApp() {
  return (
    // ✅  2. 提供上下文
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}
