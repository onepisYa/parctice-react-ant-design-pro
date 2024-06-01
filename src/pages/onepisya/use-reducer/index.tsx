/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 18:32:40
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import ReducerExampleForm from './examples/Form';
import Todo from './examples/todo/index';
import TodoDirectValue from './examples/TodoDirectValue';
import TodoInit from './examples/TodoInit';
import ImmerTodo from './examples/UseImmerTodo';
import styles from './styles.less';

export default function UseStateExample() {
  return (
    <>
      <h1>UseReducer</h1>
      <div className={styles.container}>
        <p>useReducer 的基础示例</p>
        <div>
          <h2>表单（对象类型）</h2>
          <ReducerExampleForm />
          <p>在这个示例中，state 是一个有 name 和 age 属性的对象。</p>
        </div>

        <div>
          <h2>代办事项（数组类型）</h2>
          <Todo />
          <p>
            在这个示例中，reducer 管理一个名为 tasks 的数组。数组{' '}
            <a href="https://zh-hans.react.dev/learn/updating-arrays-in-state" target="_blank">
              不能使用修改方法{' '}
            </a>
            来更新。
          </p>
        </div>

        <div>
          <h2>使用 Immer 编写简洁的更新逻辑</h2>
          <ImmerTodo />

          <p>
            如果使用复制方法更新数组和对象让你不厌其烦，那么可以使用 Immer
            这样的库来减少一些重复的样板代码。
            <a href="https://github.com/immerjs/use-immer#useimmerreducer" target="_blank">
              Immer
            </a>{' '}
            让你可以专注于逻辑，因为它在内部均使用复制方法来完成更新：
          </p>
        </div>

        <hr />
        <p>避免重新创建初始值 </p>

        <p>使用初始化函数和直接传入初始值的区别</p>
        <div>
          <h2>使用初始化函数</h2>
          <TodoInit />
          <p>
            这个示例使用了一个初始化函数，所以 createInitialState
            函数只会在初次渲染的时候进行调用。即使往输入框中输入内容导致组件重新渲染，初始化函数也不会被再次调用。
          </p>
        </div>

        <div>
          <h2> 直接传入初始值 </h2>
          <TodoDirectValue />
          <p>
            {' '}
            这个示例 没有使用
            初始化函数，所以当你往输入框输入内容导致组件重新渲染的时候，createInitialState
            函数就会执行。虽然在渲染结果上看没有什么区别，但是多余的逻辑会导致性能变差。{' '}
          </p>
        </div>
      </div>
    </>
  );
}
