/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 18:30:06
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 23:13:01
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/extract-provider/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { Context, createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import styles from '../styles.less';

type Theme = string | null;
type User = { name: string } | null;
const ThemeContext: Context<Theme> = createContext(null as Theme);
type UserProvider = { currentUser: User; setCurrentUser: Dispatch<SetStateAction<User>> } | null;
const CurrentUserContext: Context<UserProvider> = createContext(null as UserProvider);

export default function MyApp() {
  const [theme, setTheme] = useState('light' as Theme);
  const [currentUser, setCurrentUser] = useState(null as User);
  return (
    <div className={styles['onepisya-theme']}>
      <MyProviders theme={theme} setTheme={setTheme}>
        <WelcomePanel />
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
      </MyProviders>
    </div>
  );
}

// ✅
function MyProviders({
  children,
  theme,
  setTheme,
}: {
  children: React.ReactNode;
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}) {
  const [currentUser, setCurrentUser] = useState(null as User);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel() {
  const { currentUser } = useContext(CurrentUserContext)!;
  return <Panel title="Welcome">{currentUser !== null ? <Greeting /> : <LoginForm />}</Panel>;
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext)!;
  return <p>You logged in as {currentUser?.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext)!;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
  const theme = useContext(ThemeContext);
  const className = 'input-' + theme;
  return (
    <>
      <label>
        First name{': '}
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles[className]}
        />
      </label>
      <label>
        Last name{': '}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles[className]}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + ' ' + lastName,
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={styles[className]}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={styles[className]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
