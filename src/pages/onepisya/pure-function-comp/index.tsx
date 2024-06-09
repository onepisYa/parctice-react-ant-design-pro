/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-25 22:51:29
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:45:54
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/pure-function-comp/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect, useState } from 'react';
import Clock from './components/Clock';
import Profile from './components/Profile';
import styles from './components/Profile/styles.less';
import type { Story } from './components/StoryTray';
import StoryTray from './components/StoryTray';

import storyStyles from './components/StoryTray/styles.less';

let initialStories: Story[] = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function PureFunction() {
  let [stories, setStories] = useState([...initialStories]);
  let time = useTime();
  setStories([...stories, { id: 2, label: "Pis's Story" }]);

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <>
      <h1>保持组件纯粹 keep pure</h1>
      <Clock time={new Date()} />
      <div className={styles['pure-function-comp-profile']}>
        <Profile
          person={{
            imageId: 'lrWQx8l',
            name: 'Subrahmanyan Chandrasekhar',
          }}
        />
        <Profile
          person={{
            imageId: 'MK3eW3A',
            name: 'Creola Katherine Johnson',
          }}
        />
      </div>
      <div className={storyStyles['story-tray']}>
        <div
          style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <h2>It is {time.toLocaleTimeString()} now.</h2>
          <StoryTray stories={stories} />
        </div>
      </div>
    </>
  );
}
