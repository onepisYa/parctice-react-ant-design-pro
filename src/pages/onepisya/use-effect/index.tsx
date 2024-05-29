/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 05:55:24
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

import Box from './examples/Box';
import BoxByUseIntersectionObserver from './examples/box/index';
import Chat from './examples/Chat';
import ChatByUseChatHook from './examples/chatroom/index';
import Count from './examples/Count';
import FetchData from './examples/fetch-data';
import GlobalWindow from './examples/GlobalWindow';
import GlobalWindowByUseGlobalWindow from './examples/globalwindow/index';
import MyMap from './examples/map';
import ModalDialog from './examples/ModalDialog';
import MyAnimation from './examples/MyAnimation';
import styles from './styles.less';

export default function UseStateExample() {
  return (
    <>
      <h1>UseEffect</h1>

      <div className={styles.container}>
        <p>连接到外部系统的示例</p>
        <div>
          <h2>连接聊天服务器</h2>
          <p>
            在开发模式下运行，因此有一个额外的“连接并断开”的周期，就像{' '}
            <a
              href="https://zh-hans.react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed"
              target="_blank"
            >
              这里描述的
            </a>{' '}
            一样。尝试使用下拉菜单和输入框更改 roomId 和 serverUrl，并查看 Effect
            如何重新连接到聊天。点击“关闭聊天”可以看到 Effect 最后一次断开连接。
          </p>
          <Chat />
        </div>

        <div>
          <h2>监听全局的浏览器事件 </h2>
          <p>
            在这个例子中，外部系统就是浏览器 DOM 本身。通常，你会使用 JSX
            指定事件监听，但是你不能以这种方式监听全局的 window 对象。你可以通过 Effect 连接到
            window 对象并监听其事件。如监听 pointermove
            事件可以让你追踪光标（或手指）的位置，并更新红点以随之移动
          </p>
          <GlobalWindow />
        </div>

        <div>
          <h2>触发动画效果</h2>
          <p>
            在这个例子中，外部系统是 animation.js 中的动画库。它提供了一个名为 FadeInAnimation 的
            JavaScript 类，该类接受一个 DOM 节点作为参数，并暴露 start() 和 stop()
            方法来控制动画。此组件{' '}
            <a
              href="https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs"
              target="_blank"
            >
              使用 ref
            </a>{' '}
            访问底层 DOM 节点。Effect 从 ref 中读取 DOM 节点，并在组件出现时自动开启该节点的动画。
          </p>

          <MyAnimation />
        </div>

        <div>
          <h2>控制模态对话框</h2>
          <p>
            在这个例子中，外部系统是浏览器 DOM。ModalDialog 组件渲染一个 <code>{'<dialog>'}</code>
            元素。它使用 Effect 将 isOpen prop 同步到 <code>showModal()</code> 和{' '}
            <code>close()</code> 方法调用。
          </p>
          <ModalDialog />
        </div>

        <div>
          <h2>跟踪元素可见性</h2>
          <p>
            在这个例子中，外部系统仍然是浏览器 DOM。App 组件展示一个长列表，然后是 Box
            组件，然后是另一个长列表。试试向下滚动列表。请注意，所有的 Box
            组件完全在视口中可见时，背景色会变成黑色。为了实现这一点，Box 组件使用 Effect 来管理{' '}
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"
              target="_blank"
            >
              IntersectionObserver
            </a>
            。这个浏览器 API 会在视野中出现指定 DOM 元素时通知你。
          </p>
          <Box />
        </div>
        <hr />
        <p>自定义 Hook 中封装 Effect 示例 </p>

        <div>
          <h2>定制 useChatRoom Hook </h2>
          <p>
            此示例与{' '}
            <a
              href="https://zh-hans.react.dev/reference/react/useEffect#examples-connecting"
              target="_blank"
            >
              前面的一个示例
            </a>{' '}
            相同，但是逻辑被提取到一个自定义 Hook 中。
          </p>
          <ChatByUseChatHook />
        </div>

        <div>
          <h2>定制 useWindowListener Hook </h2>
          <p>
            此示例与{' '}
            <a
              href="https://zh-hans.react.dev/reference/react/useEffect#examples-connecting"
              target="_blank"
            >
              前面的一个示例
            </a>{' '}
            相同，但是逻辑被提取到一个自定义 Hook 中。
          </p>
          <p>注意蓝色小球、是这个 组件使用的</p>
          <GlobalWindowByUseGlobalWindow />
        </div>

        <div>
          <h2>定制 useIntersectionObserver Hook </h2>
          <p>
            此示例与{' '}
            <a
              href="https://zh-hans.react.dev/reference/react/useEffect#examples-connecting"
              target="_blank"
            >
              前面的一个示例
            </a>{' '}
            相同，但是部分逻辑被提取到自定义 Hook 中。
          </p>
          <BoxByUseIntersectionObserver />
        </div>
        <hr />
        <div>
          <h2>控制非 React 小部件</h2>
          <p>有时，你希望外部系统与你组件的某些 props 或 state 保持同步。</p>
          <p>
            例如，如果你有一个没有使用 React 编写的第三方地图小部件或视频播放器组件，你可以使用
            Effect 调用该组件上的方法，使其状态与 React 组件的当前状态相匹配。此 Effect 创建了在
            map-widget.ts 中定义的 MapWidget 类的实例。当你更改 Map 组件的 zoomLevel prop 时，Effect
            调用类实例上的 setZoom() 来保持同步
          </p>
          <MyMap />
          <p>
            在本例中，不需要 cleanup 函数，因为 MapWidget 类只管理传递给它的 DOM 节点。从树中删除
            Map React 组件后，DOM 节点和 MapWidget 类实例都将被浏览器的 JavaScript
            引擎的垃圾回收机制自动处理掉。
          </p>
        </div>
        <hr />
        <div>
          <h2>使用 Effect 请求数据</h2>
          <p>
            你可以使用 Effect 来为组件请求数据。请注意，如果你使用框架，使用框架的数据请求方式将比在
            Effect 中手动编写要有效得多。
          </p>
          <p>
            注意，ignore 变量被初始化为 false，并且在 cleanup 中被设置为 true。这样可以确保{' '}
            <a
              href="https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect"
              target="_blank"
            >
              你的代码不会受到“ 竞争条件 ”的影响
            </a>
            ：网络响应可能会以与你发送的不同的顺序到达。
          </p>
          <FetchData />
          <p>
            直接在 Effect 中编写数据请求会显得重复，并且很难在以后添加缓存和服务端渲染等优化。
            <a
              href="https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks"
              target="_blank"
            >
              使用自定义 Hook 更简单——不管是你自己的 Hook 还是由社区维护的 Hook。
            </a>
          </p>
        </div>

        <hr />

        <div>
          <h2>传递响应式依赖项的示例</h2>
          <p>✅ 这里非常的微妙、需要重点看下</p>
          <ul style={{ listStyle: 'reset' }}>
            <li>
              如果指定了依赖项，则 Effect 在 <b>初始渲染后以及依赖项变更的重新渲染后</b> 运行。
            </li>
            <li>
              如果你的 Effect 确实没有使用任何响应式值，则它仅在 <b>初始渲染后</b> 运行。
            </li>
            <li>
              如果完全不传递依赖数组，则 Effect 会在组件的 <b>每次单独渲染（和重新渲染）之后</b>{' '}
              运行。
            </li>
          </ul>
        </div>

        <div>
          <h2>在 Effect 中根据先前 state 更新 state</h2>
          <p>
            为了解决这个问题，将{' '}
            <a
              href="https://zh-hans.react.dev/reference/react/useState#updating-state-based-on-the-previous-state"
              target="_blank"
            >
              {'c => c + 1'}
            </a>{' '}
            状态更新器传递给 setCount：
          </p>
          <Count />
          <p>
            现在，你传递的是 {'c => c + 1'} 而不是 count + 1，
            <a
              href="https://zh-hans.react.dev/learn/removing-effect-dependencies#are-you-reading-some-state-to-calculate-the-next-state"
              target="_blank"
            >
              因此 Effect 不再需要依赖于 count
            </a>
            。由于这个修复，每次 count 更改时，它都不需要清理（cleanup）和设置（setup）间隔定时器。
          </p>
          <p>
            也就是说、Effect 里面的方法、仅仅运行一次、 虽然每次都会更新组件、但是 副作用
            只会运行一次。无需每次运行 Effect 的 setup 以及清理函数
          </p>
        </div>
        <div>
          <h2>删除不必要的对象依赖项 </h2>
          <p>如果你的 Effect 依赖于在渲染期间创建的对象或函数，则它可能会频繁运行。</p>
          <p>避免使用渲染期间创建的对象作为依赖项。相反，在 Effect 内部创建对象</p>
          <h2>删除不必要的函数依赖项 </h2>
          <p>如果你的 Effect 依赖于在渲染期间创建的对象或函数，则它可能会频繁运行</p>
          <p>
            就其本身而言，在每次重新渲染时从头新建一个函数不是问题。你不需要优化它。但是，如果你将其用作
            Effect 的依赖项，则会导致 Effect 在每次重新渲染后重新运行。
          </p>
          <p>避免使用在渲染期间创建的函数作为依赖项，请在 Effect 内部声明它：</p>
        </div>
      </div>
    </>
  );
}
