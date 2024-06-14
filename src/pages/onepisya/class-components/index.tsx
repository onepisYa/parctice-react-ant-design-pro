/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-14 08:25:22
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import ChatRoomBox from './examples/chat-room';
import AAAAOBOOP from './examples/children/alternative-accepting-an-array-of-objects-as-a-prop';
import ARLCARPTCR from './examples/children/alternative-row-list-calling-a-render-prop-to-customize-rendering';
import ARLEMC from './examples/children/alternative-row-list-exposing-multiple-components';
import ATSRP from './examples/children/alternative-tab-switcher-render-props';
import ReversedList from './examples/children/reversed-list';
import RowList from './examples/children/row-list';
import SeparatorList from './examples/children/separator-list';
import TabSwitcher from './examples/children/tab-switcher';
import AltUpdateListByContext from './examples/clone-element/alternative-update-list-by-context';
import AltUpdateListByHooks from './examples/clone-element/alternative-update-list-by-hooks';
import AltUpdateListByProps from './examples/clone-element/alternative-update-list-by-props';
import UpdateList from './examples/clone-element/update-list';
import CounterBox from './examples/Counter';
import GreetingBox from './examples/Greeting';
import PureComponentBox from './examples/PureComponent';
import styles from './styles.less';

export default function UseStateExample() {
  return (
    <>
      <h1>使用类组件</h1>
      <p>类组件例子</p>
      <div className={styles.container}>
        <div>
          <h2> 定义类式组件 : Greeting </h2>
          <GreetingBox />
        </div>
        <div>
          <h2>向类式组件添加 state : Counter</h2>
          <CounterBox />
        </div>
        <div>
          <h2>向类式组件中添加生命周期方法</h2>
          <ChatRoomBox />
        </div>
        <div>
          <h2>PureComponent类组件 类似 函数式中的 memo 。 以及 完全兼容所有的 Component 类组件</h2>
          <span>
            <p>你们会发现 PureComponent 会忽略更新 Adress 、</p>
            <p>因为 Greeting 组件的 props 只有 name、没有 address</p>
            <p>
              并且在 父组件更新的时候、也不会更新子组件、只要子组件的 props 或者 state 没有改变、
              context 改变、会导致 PureComponent 重渲染
            </p>
          </span>
          <PureComponentBox />
        </div>
        <div>
          <h2>注意点击“下一步”如何更新 List 的状态，并高亮显示不同的行 </h2>
          <UpdateList />
        </div>
        <div>
          <h2> 上面那个例子的更好的替代方案 </h2>
          <h3>替代方式1: 通过 props 传递数据</h3>
          <p>
            {' '}
            你可以清楚地追踪 isHighlighted 的来源。 这种方案优于 cloneElement，因为它更加清晰。
          </p>
          <AltUpdateListByProps />
        </div>

        <div>
          <h2>替代方案2: 通过 context 传递数据 </h2>
          <AltUpdateListByContext />
        </div>

        <div>
          <h2> 替代方案3 : 将逻辑提取到自定义 Hook 中 </h2>
          <p> 数据流是显式的，但状态位于 useList 自定义 Hook 内，你可以在任意一个组件内使用它： </p>
          <AltUpdateListByHooks />
          <p>如果你想在不同组件之间复用此逻辑，则这个方案十分有用。</p>
        </div>

        <hr />

        <h1>Children</h1>
        <div>
          <h2> 为每一个子元素执行一段代码 </h2>
          <p>
            调用 Children.forEach 能够迭代 children
            数据结构中的每一个子节点。它并不会返回任何值，这和 数组的 forEach 方法
            类似。你可以使用它来运行自定义逻辑，例如构造自己的数组。
          </p>
          <SeparatorList />
        </div>
        <div>
          <h2>统计子节点</h2>
          <RowList />
        </div>

        <div>
          <h2>将 children 转化为数组 </h2>
          <ReversedList />
          <p>
            通过调用 Children.toArray(children) 将 children 变为一个常规的 JavaScript
            数组。这使得你能够使用 filter， sort， 或者 reverse 等数组内置方法来操作这个数组。
          </p>
        </div>
        <hr />
        <h1>Children 的替代方案</h1>
        <div>
          <h2>暴露多个组件</h2>
          <ARLEMC />
        </div>
        <div>
          <h2>接收对象数组作为参数 </h2>
          <AAAAOBOOP />
        </div>
        <p>
          因为 rows 是一个常规的 JavaScript 数组，RowList 组件可以对其使用 map 等数组内置方法。
          当你希望能够将更多信息作为结构化数据，与子节点一起传递时，这个方案将会非常有用。在下面的示例中，TabSwitcher
          接收了一个对象数组作为 tabs 的属性：
        </p>
        <div>
          <h2>TabSwitcher</h2>
          <TabSwitcher />
          <p>
            和将子节点作为 JSX 传递不同，这个方法允许你将一些额外的数据，比如
            header，与每个子项关联。因为你直接使用 tabs，并且它是一个数组，所以你并不需要 Children
            方法。
          </p>
        </div>
        <div>
          <h2>调用渲染属性以自定义渲染</h2>
          <ATSRP />
          <p>
            除了为每一个子项生成 JSX，你还可以传递一个返回值类型是 JSX
            的函数，并且在必要的时候调用这个函数。在这个示例中，App 组件向 TabSwitcher
            组件传递了一个 renderContent 函数。TabSwitcher 组件仅对被选中的 tab 调用 renderContent
          </p>
        </div>

        <div>
          <p>
            像 renderContent
            这样的参数会被称为渲染属性，因为它指定了如何渲染一部分用户交互界面。但是，它也并没有什么特别之处，只是一个普通的属性同时恰好又是一个函数。
            渲染属性是函数，所以你可以向它们传递参数。比如，这里的 RowList 组件向 renderRow
            传递了一个 id 和每一行的 index，该属性用 index 来选择偶数行：
          </p>
          <p>这是如何在不操纵子组件的情况下，父组件和子组件进行协作的另一个示例。</p>
          <ARLCARPTCR />
        </div>
      </div>
    </>
  );
}
