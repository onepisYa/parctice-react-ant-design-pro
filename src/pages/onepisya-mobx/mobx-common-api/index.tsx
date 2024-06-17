/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 10:03:10
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-16 04:20:46
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/mobx-common-api/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../styles.less';
import Doubler from './examples/make-observable-state/MakeObservable';
import FactoryFnDoubler from './examples/make-observable-state/MakeObservableFactoryFunction';
import OBTodo from './examples/make-observable-state/Observable';
import Test from './examples/make-observable-state/Test';

export default function Hello() {
  return (
    <>
      <h1>Mobx</h1>
      <p>Mobx 常用API</p>
      <div className={styles.container}>
        <h1>makeObservable</h1>
        <div>
          <h2> class + makeObservable </h2>
          <Doubler />
          <div>
            <p>
              <strong>所有带注解</strong> 的字段都是 <strong>不可配置的</strong>。<br />
              <strong>所有的不可观察</strong>（无状态）的字段（<code>action</code>,{' '}
              <code>flow</code>）都是 <strong>不可写的</strong>。
            </p>
          </div>
        </div>
        <div>
          <h2> factory function + makeAutoObservable </h2>
          <FactoryFnDoubler />
          <p>
            {' '}
            注意，类也可以跟 makeAutoObservable 合用。 示例中的差异就展示了将 MobX
            应用于不同编程风格的方法。{' '}
          </p>
        </div>
        <div>
          <h2>observable</h2>
          <p>
            与第一个例子中的 makeObservable 不同，observable 支持为对象添加（和删除）字段。 这使得
            observable 非常适合用于像动态键控的对象、数组、Maps 和 Sets 之类的集合。
          </p>

          <OBTodo />
        </div>

        <div>
          <h1>test</h1>
          <Test />
        </div>
      </div>
    </>
  );
}
