/*
 * Copyright (c) 2024 by ${git_name_email} , All Rights Reserved.
 * @Date: 2024-05-23 13:28:59
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-23 15:16:38
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/conditional-rendering/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import { useState } from 'react';

// Conditional Rendering

import { Fragment } from 'react/jsx-runtime';
// 这个 Fragment 就是 <></> 写法
export default function ConditionalRedering() {
  let content;
  const [isLoggedIn, setisLoggedIn] = useState(true);
  if (isLoggedIn) {
    content = <h1>AdminPanel</h1>;
  } else {
    content = <h1>LoginForm</h1>;
  }

  return (
    <Fragment>
      <div>{content}</div>
      <p>
        更新界面、通过 useState 定义状态、通过 setState 更新状态
        在这里更新的是我们的条件、所以点击按钮就会改变界面。
      </p>
      <button
        type="button"
        onClick={() => {
          setisLoggedIn(!isLoggedIn);
        }}
      >
        {' '}
        toggle loggedIn state
      </button>
    </Fragment>
  );
}
