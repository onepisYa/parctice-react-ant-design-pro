/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 01:16:56
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-27 01:16:58
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/MyCheckbox.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}
