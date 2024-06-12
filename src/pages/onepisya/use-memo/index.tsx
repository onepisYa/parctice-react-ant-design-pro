/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 01:31:54
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import ARRAC from './examples/always-re-rendering-a-component';
import ARAV from './examples/always-recalculating-a-value/index';
import SER from './examples/skipping-expensive-recalculations/index';
import SRRWPAU from './examples/skipping-re-rendering-when-props-are-unchanged';
import MyPage from './examples/skipping-re-rendering-with-useCallback-and-memo';
import SRRWUMAM from './examples/skipping-re-rendering-with-useMemo-and-memo';
import UAMCUAC from './examples/updating-a-memoized-component-using-a-context ';
import UAMCUS from './examples/updating-a-memoized-component-using-state';
import USFAMC from './examples/updating-state-from-a-memoized-callback';
import styles from './styles.less';

export default function UseStateExample() {
  return (
    <>
      <h1>memo</h1>
      <div className={styles.container}>
        <p>useMemo 的基础示例</p>
        <p>注意 重渲染不代表 Dom 会被重新挂载</p>
        <div>
          <h2>使用 useMemo 跳过重复计算 跳过昂贵的重计算</h2>
          <p>
            在这个例子中，filterTodos 的执行被
            人为减速了，这样就可以看到渲染期间调用的某些函数确实很慢时会发生什么。尝试切换选项卡并切换主题。
            切换选项卡会感觉很慢，因为它迫使减速的 filterTodos
            重新执行。这是预料之中的效果，因为“选项卡”已更改，因此整个计算 需要 重新运行。
          </p>
          <p>
            然后试试切换主题。在 useMemo 的帮助下，尽管已经被人为减速，但是它还是很快！缓慢的
            filterTodos 调用被跳过，因为 todos 和 tab（你将其作为依赖项传递给
            useMemo）自上次渲染以来都没有改变。
          </p>
          <SER />
        </div>

        <div>
          <h2>始终重新计算</h2>
          <p>
            在这个例子中，filterTodos 的执行也被
            人为减慢了，这样就可以看到渲染期间调用的某些函数确实很慢时会发生什么。尝试切换选项卡并切换主题。
            与前面的示例不同，现在切换主题也很慢！这是因为 此版本没有调用
            useMemo，因此每次重新渲染都会调用人为减速的 filterTodos。即使只有 theme
            发生了变化，它也会被调用。
          </p>
          <ARAV />
        </div>
        <p>跳过重新渲染和总是重新渲染之间的区别</p>
        <div>
          <h2>用 useMemo 和 memo 跳过重新渲染</h2>
          <p>
            在此示例中，List 组件被 人为地减速了，以便可以看到当渲染的 React
            组件真正变慢时会发生什么。尝试切换选项卡并切换主题。
            切换选项卡感觉很慢，因为它迫使减速的 List 重新渲染。这是预料之中的，因为选项卡 tab
            已更改，因此你需要在屏幕上展示用户的新选择。 接下来，尝试切换主题。感谢 useMemo 和
            memo，尽管被人为减速了，但是它还是很快！由于作为依赖性传递给 useMemo 的 todos 与 tab
            都没有发生改变，因此 visibleTodos 不会发生改变。由于 visibleTodos
            数组从上一次渲染之后就没有发生改变，所以 List 会跳过重新渲染。
          </p>
          <SRRWUMAM />
        </div>
        <div>
          <h2>总是重新渲染一个组件</h2>
          <p>
            在这个例子中，List 的实现也被 人为地减慢了，这样就可以看到当渲染的某些 React
            组件真的很慢时会发生什么。尝试切换选项卡并切换主题。
            与前面的示例不同，现在切换主题也很慢！这是因为 此版本中没有使用 useMemo，所以
            visibleTodos 始终是一个不同的数组，并且速度变慢的 List 组件无法跳过重新渲染。
          </p>
          <ARRAC />
        </div>

        <hr />
        <h1>memo相关</h1>
        <div>
          <h2>当 props 没有改变时跳过重新渲染 </h2>
          <p>
            在此示例中，请注意 Greeting 组件在 name 更改时重新渲染（因为那是它的 props
            之一），但是在 address 更改时不会重新渲染（因为它不作为 props 传递给 Greeting）：
          </p>
          <SRRWPAU />
        </div>
        <div>
          <h2>使用 state 更新记忆化（memoized）组件 </h2>
          <span>
            <p>
              即使一个组件被记忆化了，当它自身的状态发生变化时，它仍然会重新渲染。memoization
              只与从父组件传递给组件的 props 有关。
            </p>
          </span>
          <UAMCUS />
          <p>
            如果将 state 变量设置为其当前值，即使没有使用 memo，React
            也会跳过重新渲染组件。你仍然可能会看到额外地调用组件函数，但其结果将被丢弃。
          </p>
        </div>

        <div>
          <h2>使用 context 更新记忆化（memoized）组件</h2>
          <p>
            即使组件已被记忆化，当其使用的 context
            发生变化时，它仍将重新渲染。记忆化只与从父组件传递给组件的 props 有关。
          </p>
          <UAMCUAC />
          <p>
            为了使组件仅在 context 的 某个部分 发生更改时重新渲染，<b>请将组件分为两个部分</b>。
            在外层组件中从 <code>context</code>
            中读取所需内容，并将其作为 <code>props</code> 传递给 <b>记忆化的子组件</b>。
          </p>
        </div>

        <hr />
        <h1>useCallBack 相关例子</h1>
        <div>
          <h2> 使用 useCallback 和 memo 跳过函数的重新渲染 </h2>
          <MyPage />
          <span>
            <p>
              在这个例子中，ShippingForm 组件被人为地减慢了速度，以便你可以看到渲染的 React
              组件真正变慢时会发生什么。尝试递增计数器并切换主题。
              递增计数器感觉很慢，因为它会强制变慢 ShippingForm
              的重新渲染。这是意料之中的，因为计数器已更改，因此你需要在屏幕上反映用户的新选择。
              接下来，尝试更改主题。将 useCallback 和 memo
              结合使用后，尽管人为减缓了速度，但它还是很快。由于 useCallback 依赖 productId 与
              referrer 自上次渲染后始终没有发生改变，因此 handleSubmit 也没有改变。由于 handleSubmit
              没有发生改变，ShippingForm 就跳过了重新渲染
            </p>
          </span>
        </div>

        <div>
          <h2>
            始终重新渲染组件-不使用 useCallback 来优化、每次都会创建新函数、也是说 props
            每次都不一样、组件每次都重渲染、{' '}
          </h2>
          <USFAMC />
          <span>
            <p>可以通过我的 slow:false 关闭手动减速、来比较差异</p>
            <p>
              与前面示例不同，现在切换主题也很慢！这是因为 此处没有调用 useCallback，所以
              handleSubmit 总是一个新的函数，并且被减速的 ShippingForm 组件不能跳过重新渲染。
            </p>
            <p>移除了人为减缓的部分。此时缺少 useCallback 是否会感觉明显？</p>
            <p>
              很多时候，没有记忆化的代码运行得也很好。如果你的交互已经足够快了，就不必去使用记忆化。
              注意，如果你需要在生产模式下运行 React，请禁用 React
              开发者工具，并使用与用户类似的设备，以便真实地了解实际减慢应用速度的因素。
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
