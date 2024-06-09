/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 18:11:15
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:56:06
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/Login.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type User = { name: string } | null;
type UserProvider = { currentUser: User; setCurrentUser: Dispatch<SetStateAction<User>> } | null;

const CurrentUserContext: Context<UserProvider> = createContext(null as UserProvider);
function Button({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button type="button" className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function LoginButton() {
  const provider = useContext(CurrentUserContext)!;
  const { currentUser, setCurrentUser } = provider;

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: 'Advika' });
      }}
    >
      Log in as Advika
    </Button>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null as User);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  );
}
