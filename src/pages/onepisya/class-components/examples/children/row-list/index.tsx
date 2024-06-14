/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 17:13:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 08:59:57
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/children/row-list/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '@/pages/onepisya/class-components/examples/clone-element/update-list/styles.less';
import RowList from './RowList';

function MoreRows() {
  return (
    <>
      <div className={styles.Row}>
        <p>this is more rows 1</p>
      </div>
      <div className={styles.Row}>
        <p>this is more rows 2</p>
      </div>
      <div className={styles.Row}>
        <p>this is more rows 3</p>
      </div>
      <div className={styles.Row}>
        <p>this is more rows 4</p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <RowList>
        <p>这是第一项。</p>
        <p>这是第二项。</p>
        <p>这是第三项。</p>
        {/* ✅ 在 Child.count 中 这个地方仅仅算一个节点 */}
        <MoreRows />
      </RowList>
    </>
  );
}
