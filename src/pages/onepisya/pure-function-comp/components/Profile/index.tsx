/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-26 00:01:43
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:46:24
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/pure-function-comp/components/Profile/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
/*
两个 Profile 组件使用不同的数据并排呈现。在第一个资料中点击 “Collapse” 折叠，然后点击 “Expand” 展开它。你会看到两个资料现在显示的是同一个人。这是一个 bug。
找出产生 bug 的原因，并修复它。
*/

import Panel from './Panel';
import styles from './styles.less';
import { getImageUrl } from './utils';

export type Person = {
  name: string;
  imageId: string;
};
// ✅
function Header({ person }: { person: Person }) {
  return <h1>{person.name}</h1>;
}

// ✅  直接通过参数传递过去即可、不要修改和依赖外部的状态。
function Avatar({ person }: { person: Person }) {
  return (
    <img
      className={styles.avatar}
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

// let currentPerson: Person; // ❌ 问题所在
export default function Profile({ person }: { person: Person }) {
  // currentPerson = person; // ❌ 问题所在
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}
