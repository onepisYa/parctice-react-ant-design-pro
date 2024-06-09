/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 20:59:29
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import BetterSaveButton from './examples/BetterSaveButton';
import ButtonAndBar from './examples/ButtonAndBar';
import ChatAPP from './examples/chat-app/index';
import ChatAPPByHook from './examples/chat-app/index-by-hook';
import CustomChatAPP from './examples/custom-chat-app/index';
import CustomForm from './examples/Form';
import SaveButton from './examples/SaveButton';
import StatusBar from './examples/StatusBar';
import styles from './styles.less';

export default function UseStateExample() {
  return (
    <>
      <h1>自定义 Hook</h1>
      <div className={styles.container}>
        <p>自定义 Hook 例子</p>

        <div>
          <h2>StatusBar</h2>
          <StatusBar />
        </div>

        <div>
          <h2>SaveButton</h2>
          <SaveButton />
          <p>这个组件的逻辑和 StatusBar 是一样的、也是根据是否在线、在渲染一些内容。</p>
        </div>

        <div>
          <h2> 从组件中提取自定义 Hook </h2>
          <p>封装前面两个例子中的逻辑。</p>
          <span>
            更重要的是，<b>组件内部的代码描述的是想要做什么（使用在线状态！）</b>，
            <p>
              <b>而不是怎么做（通过订阅浏览器事件完成）。</b>
            </p>
          </span>
          <ButtonAndBar />

          <p className="whitespace-pre-wrap my-4">
            React 应用是由组件构成，而组件由内置或自定义 Hook 构成。可能你经常使用别人写的自定义
            Hook，但偶尔也要自己写！
          </p>
          <p className="whitespace-pre-wrap my-4">你必须遵循以下这些命名公约：</p>
          <ol className="ms-6 my-3 list-decimal">
            <li className="leading-relaxed mb-1">
              <strong className="font-bold">React 组件名称必须以大写字母开头</strong>，比如{' '}
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                StatusBar
              </code>{' '}
              和{' '}
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                SaveButton
              </code>
              。React 组件还需要返回一些 React 能够显示的内容，比如一段 JSX。
            </li>
            <li className="leading-relaxed mb-1">
              <strong className="font-bold">
                Hook 的名称必须以{' '}
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  use
                </code>{' '}
                开头，然后紧跟一个大写字母
              </strong>
              ，就像内置的{' '}
              <a
                className="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
                href="https://zh-hans.react.dev/reference/react/useState"
              >
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  useState
                </code>
              </a>{' '}
              或者本文早前的自定义{' '}
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                useOnlineStatus
              </code>{' '}
              一样。Hook 可以返回任意值。
            </li>
          </ol>
        </div>

        <div>
          <h2>自定义 Hook 共享的是状态逻辑，而不是状态本身</h2>
          <span className="text-base prose prose-truegray">
            <p>
              {' '}
              之前的例子里，当你开启或关闭网络时，两个组件一起更新了。但是两个组件共享 state 变量
              isOnline 这种想法是错的{' '}
            </p>
            <p>
              {' '}
              这是完全独立的两个 state 变量和
              Effect！只是碰巧同一时间值一样，因为你使用了相同的外部值同步两个组件（无论网络是否开启）。{' '}
            </p>
          </span>
          <CustomForm />
        </div>

        <div>
          <h2> 在 Hook 之间传递响应值 </h2>
          <p className="whitespace-pre-wrap my-4">
            每当组件重新渲染，自定义 Hook 中的代码就会重新运行。
          </p>
          <p className="whitespace-pre-wrap my-4">
            这就是组件和自定义 Hook 都 需要是纯函数 的原因。我们应该把自定义 Hook
            的代码看作组件主体的一部分。
          </p>
          <p className="whitespace-pre-wrap my-4">
            由于自定义 Hook 会随着组件一起重新渲染，所以组件可以一直接收到最新的 props 和 state
          </p>
          <ChatAPP />

          <div className="max-w-4xl ms-0 2xl:mx-auto">
            <p className="whitespace-pre-wrap my-4">每个表单域都有一部分重复的逻辑：</p>
            <ol className="ms-6 my-3 list-decimal">
              <li className="leading-relaxed mb-1">
                都有一个 state（
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  firstName
                </code>{' '}
                和{' '}
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  lastName
                </code>
                ）。
              </li>
              <li className="leading-relaxed mb-1">
                都有 change 事件的处理函数（
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  handleFirstNameChange
                </code>{' '}
                和{' '}
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  handleLastNameChange
                </code>
                ）。
              </li>
              <li className="leading-relaxed mb-1">
                都有为输入框指定{' '}
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  value
                </code>{' '}
                和{' '}
                <code
                  dir="ltr"
                  className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
                >
                  onChange
                </code>{' '}
                属性的 JSX。
              </li>
            </ol>
            <p className="whitespace-pre-wrap my-4">
              你可以提取重复的逻辑到自定义 Hook{' '}
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                useFormInput
              </code>
              ：
            </p>
          </div>
        </div>
        <div>
          <h2>使用上个例子中封装的 useChatRoom</h2>
          <ChatAPPByHook />
        </div>

        <div>
          <h2>把事件处理函数传到自定义 Hook 中 </h2>
          <p className="whitespace-pre-wrap my-4">
            当你在更多组件中使用 useChatRoom 时，你可能希望组件能定制它的行为
          </p>
          <span>
            <p className="whitespace-pre-wrap my-4">
              增加对{' '}
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                onReceiveMessage
              </code>{' '}
              的依赖并不理想，因为每次组件重新渲染时聊天室就会重新连接。 通过{' '}
              <a
                className="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
                href="https://zh-hans.react.dev/learn/removing-effect-dependencies#wrapping-an-event-handler-from-the-props"
              >
                将这个事件处理函数包裹到 Effect Event 中来将它从依赖中移除
              </a>
              ：
            </p>
          </span>
          <p className="whitespace-pre-wrap my-4">
            现在每次 ChatRoom 组件重新渲染时聊天室都不会重连。这是一个将事件处理函数传给自定义 Hook
            的完整且有效的 demo
          </p>
          <CustomChatAPP />
        </div>

        <div>
          <h2>自定义 Hook 帮助你迁移到更好的模式</h2>
          <BetterSaveButton />

          <span>
            <p>这是把 Effect 包裹进自定义 Hook 有益的另一个原因：</p>
            <ol style={{ listStyle: 'unset' }}>
              <li>你让进出 Effect 的数据流非常清晰。</li>
              <li>你让组件专注于目标，而不是 Effect 的准确实现。</li>
              <li>当 React 增加新特性时，你可以在不修改任何组件的情况下移除这些 Effect。</li>
              <li>
                和 设计系统 相似，你可能会发现从应用的组件中提取通用逻辑到自定义 Hook
                是非常有帮助的。这会让你的组件代码专注于目标，并且避免经常写原始
                Effect。许多很棒的自定义 Hook 是由 React 社区维护的
              </li>
            </ol>
          </span>
        </div>
      </div>
    </>
  );
}
