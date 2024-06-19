/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 10:03:10
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-17 16:52:13
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../styles.less';
import Count from './examples/count';
import ProdctList from './examples/product-list';
import UsersPage from './examples/users';

export default function Hello() {
  return (
    <>
      <h1>dva</h1>
      <p>dva 例子</p>
      <div className={styles.container}>
        <div>
          <h2>商品列表例子</h2>
          <ProdctList />
        </div>

        <div>
          <h2>计数器例子</h2>
          <Count />
        </div>
        <div>
          <h2>用户列表例子</h2>
          <UsersPage />
        </div>
      </div>
    </>
  );
}
