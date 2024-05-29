/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 04:12:07
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 04:24:52
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/fetch-data/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { fetchBio } from './api';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  type Bio = string | null;
  const [bio, setBio]: [bio: Bio, setBio: Dispatch<SetStateAction<Bio>>] = useState(null as Bio);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result as Bio);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select
        disabled={!bio}
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  );
}
