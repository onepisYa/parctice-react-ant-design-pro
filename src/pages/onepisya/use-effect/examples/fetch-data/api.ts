/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 04:12:19
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 04:25:38
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/fetch-data/api.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
export async function fetchBio(person: string) {
  const delay = person === 'Bob' ? 2000 : 200;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('This is ' + person + '’s bio.');
    }, delay);
  });
}
