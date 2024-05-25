/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-26 00:01:43
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-26 00:58:50
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/pure-function-comp/components/Profile/utils.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import type { Person } from './index';
export function getImageUrl(person: Person, size = 's') {
  return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}
