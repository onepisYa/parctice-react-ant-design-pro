/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-14 10:03:10
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-15 19:44:46
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/design-pattern/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../styles.less';
import MobxByContext from './examples/using-external-state-in-observer-components/UseContext';
import MobxByGlobal from './examples/using-external-state-in-observer-components/UseGlobal';
import MobxByProps from './examples/using-external-state-in-observer-components/UseProps';
import MobxByUseLocalOB from './examples/using-local-observable-state-in-observer-components/MobxUseLocalObservable';
import MobxByStateAndGOB from './examples/using-local-observable-state-in-observer-components/UseStateAndGlobalObservable';
import MobxByState from './examples/using-local-observable-state-in-observer-components/UseStateAndObservableCls';

export default function Hello() {
  return (
    <>
      <h1>Mobx</h1>
      <p>Mobx 设计模式例子</p>
      <div className={styles.container}>
        <h1>observer 组件中使用外部状态 （Using external state in observer components）</h1>
        <span> 可被观察对象可以通过组件的props属性传入 (在下面的例子中): </span>
        <div>
          <h2>使用 props</h2>
          <span>此例子中、直接使用 props 传递 timer、传递 mobx 的对象</span>
          <MobxByProps />
        </div>
        <div>
          <h2>使用全局变量</h2>
          <span>
            虽然我们不关心是 如何 引用（reference）的可观察对象,但是我们可以使用 （consume）
            外部作用域（outer scopes directly）的可观察对象 (类似通过 import这样的方法, 等等)：
          </span>
          <MobxByGlobal />
          <span>
            直接使用可观察对象效果很好，但是这通常会是通过模块引入，这种写法可能会使单元测试变得复杂。
            因此，我们建议使用React Context。
          </span>
        </div>
        <div>
          <h2>使用 context</h2>
          <span>使用React Context共享整个可观察子树是一种很不错的选择</span>
          <MobxByContext />
          <span>
            需要注意的是我们并不推荐每一个不同的 值（value） 都通过不同的 Provider来传递 .
            在使用Mobx的过程中不需要这样做, 因为共享的可观察对象会更新他自己。
          </span>
        </div>
        <div>
          <h2>使用 useState 和 observable Timer Class</h2>
          <span>
            使用全局可观察对象的最简单的方式就是通过useState去存储一个全局可观察对象的引用。
          </span>
          <span>
            需要注意的是,
            因为我们不需要替换全局可观察对象的引用,所以我们其实可以完全不声明useState的更新方法:
          </span>
          <MobxByState />
        </div>
        <div>
          <h2>useState 与全局可观察对象</h2>
          <span>
            如刚才说的那样,
            直接创建一个可观察的对象，而不是使用classes（这里的类指的是全局定义的Mobx
            state，在它们是使用class声明的）。
          </span>
          <span>
            我们可以参考{' '}
            <a
              rel="noreferrer"
              href="https://zh.mobx.js.org/observable-state.html#observable"
              target="_blank"
            >
              observable
            </a>{' '}
            这篇文章：
          </span>
          <MobxByStateAndGOB />
        </div>
        <div>
          <h2>useLocalObservable hook</h2>
          <span>
            const [store] = useState(() =&#x3E; observable({'{ /* something */}'}))
            是非常通用的一套写法， 为了简化这个写法我们可以调用mobx-react-lite 包中的{' '}
            <a
              href="https://github.com/mobxjs/mobx-react#uselocalobservable-hook"
              target="_blank"
              rel="noreferrer"
            >
              useLocalObservable hook
            </a>{' '}
            ,可以将上面的例子简化成：
          </span>
          <MobxByUseLocalOB />
        </div>
        <div>
          <p>
            <b>不要将可观察对象传递到 不是observer的组件中</b>（Don&apost pass observables into
            components that aren&apost observer） 通过observer包裹的组件 只可以 订阅到在 他们自己
            渲染的期间的可观察对象.{' '}
          </p>
          <p>
            <b>
              如果要将可观察对象 objects / arrays / maps 传递到子组件中, 他们必须被 observer 包裹。
            </b>{' '}
            通过callback回调的组件也是一样。
          </p>
          <p>
            <b>
              如果你非要传递可观察对象到未被observer包裹的组件中，
              要么是因为它是第三方组件，要么你需要组件对Mobx无感知，那你必须在传递前
              转换可观察对象为显式 （convert the observables to plain JavaScript values or
              structures） 。
            </b>
          </p>
          <div>类似 vue 里面 raective 结构之后失去响应式</div>
          <div>所以最好 直接 title = ob.title 类似这样的去传递参数给子组件</div>
        </div>
      </div>
    </>
  );
}
