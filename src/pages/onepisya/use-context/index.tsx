/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 01:59:20
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import ExtractProviderLogin from './examples/extract-provider';
import MyLogin from './examples/Login';
import MulLogin from './examples/MultiLogin';
import OverridingTheme from './examples/OverridingTheme';
import Page from './examples/page';
import TaskAPP from './examples/task';
import MyTheme from './examples/theme';
import UpdateMyTheme from './examples/update-theme';
import styles from './styles.less';

export default function UseStateExample() {
  return (
    <>
      <h1>UseContext</h1>
      <div className={styles.container}>
        <div>
          <h2>向组件树深层传递数据</h2>
          <MyTheme />
          <p>
            useContext() 总是在调用它的组件 上面 寻找最近的 provider。它向上搜索， 不考虑 调用
            useContext() 的组件中的 provider。
          </p>
        </div>
        <hr />
        <p>通过 context 更新传递的数据</p>
        <div>
          <h2>通过 context 来更新数据 </h2>
          <UpdateMyTheme />
          <p>
            在这个示例中，MyApp 组件包含一个状态变量，然后该变量被传递给 ThemeContext
            provider。选中“Dark mode”复选框更新状态。更改提供的值将重新渲染使用该 context
            的所有组件。
          </p>
        </div>

        <div>
          <h2>通过 context 来更新数据 </h2>
          <MyLogin />
          <p>
            在这个例子中，有一个 currentUser 状态变量，它包含一个对象。将{' '}
            {'{ currentUser, setCurrentUser }'} 组合成一个对象，并通过 context 在 value={'{}'}{' '}
            中向下传递。这允许下面的任何组件，如 LoginButton，同时读取 currentUser 和
            setCurrentUser，然后在需要时调用 setCurrentUser
          </p>
        </div>

        <div>
          <h2>同时使用多个 context</h2>
          <MulLogin />
          <p>
            在这个例子中，存在两个独立的 context。ThemeContext 提供了当前的主题，它是一个字符串，而
            CurrentUserContext 保存了代表当前用户的对象。
          </p>
        </div>

        <div>
          <h2>把 provider 抽离成组件</h2>
          <ExtractProviderLogin />
          <p>
            随着你的应用增长，预计你会有一个像“金字塔”一样的 context
            出现在靠近你应用的根部。这样没什么问题。然而，如果你从审美上不喜欢这种嵌套，你可以将
            provider 抽离成单独的组件。在这个例子中，MyProviders 隐藏了“管路”，并且在需要的 provider
            中渲染传递给它的子节点。请注意，MyApp 本身需要 theme 和 setTheme 状态，因此 MyApp
            仍然拥有这部分的状态。
          </p>
        </div>

        <div>
          <h2>使用 context 和 reducer 进行扩展 </h2>
          <TaskAPP />
          <p>
            在大型应用程序中，通常将 context 和{' '}
            <a href="https://zh-hans.react.dev/reference/react/useReducer" target="_blank">
              reducer
            </a>{' '}
            结合起来从组件中抽离与某种状态相关的逻辑。在本例中，所有的“线路”都隐藏在 TasksContext.js
            中，它包含一个 reducer 和两个单独 context。 阅读这个例子的{' '}
            <a
              href="https://zh-hans.react.dev/learn/scaling-up-with-reducer-and-context"
              target="_blank"
            >
              完整演示
            </a>
            实际上、 reducer 类似于一个小型状态管理。
          </p>
        </div>

        <hr />
        <p>覆盖组件树一部分的 context </p>
        <div>
          <h2>覆盖主题</h2>
          <p>
            这里，与 Footer 外的值为（"dark"）的按钮相比，里面 的按钮接收到一个不一样的 context
            值（"light"）。
          </p>
          <OverridingTheme />
        </div>

        <div>
          <h2>自动嵌套标题</h2>
          <Page />
          <p>
            在嵌套使用 context provider 时，可以“累积”信息。在此示例中，Section 组件记录了
            LevelContext，该 context 指定了 section 嵌套的深度。它从父级 section 中读取
            LevelContext，然后把 LevelContext 的数值加一传递给子级。因此，Heading 组件可以根据被
            Section 组件嵌套的层数自动决定使用 {'<h1>，<h2>，<h3>，…，'}中的哪种标签。 阅读此示例的{' '}
            <a
              href="https://zh-hans.react.dev/learn/passing-data-deeply-with-context"
              target="_blank"
            >
              详细演示
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
