/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 00:49:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-28 03:44:29
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import Counter from './examples/Counter';
import CountLabel from './examples/CountLabel';
import DirectTodoList from './examples/DirectTodoList';
import DirectValueCounter from './examples/DirectValueCounter';
import Form from './examples/Form';
import ImmerBucketList from './examples/ImmerBucketList';
import MyInput from './examples/InputTextField';
import KeyForm from './examples/KeyForm';
import MyCheckbox from './examples/MyCheckbox';
import NestedForm from './examples/NestedForm';
import ObjectForm from './examples/ObjectForm';
import TaskApp from './examples/TaskApp';
import TodoList from './examples/TodoList';
import UpdateFunctionCounter from './examples/UpdateFunctionCounter';
import styles from './styles.less';

console.log('UseStateExample', UpdateFunctionCounter);

export default function UseStateExample() {
  return (
    <>
      <h1>UseState</h1>

      <div className={styles.container}>
        <p>基本例子</p>
        <div>
          <h2>Counter</h2>
          <Counter />
        </div>

        <div>
          <h2>MyInput</h2>
          <MyInput />
        </div>

        <div>
          <h2>MyCheckbox</h2>
          <MyCheckbox />
        </div>

        <div>
          <h2>Form</h2>
          <Form />
        </div>
        <hr />
        <p>传递 更新函数 和 直接传递 下一个状态 之间的区别</p>
        <div>
          <h2>使用更新函数的 Counter</h2>
          <UpdateFunctionCounter />
        </div>
        <div>
          <h2>直接传递更新值的 Counter</h2>
          <p>这个示例 没有 传递更新函数，所以“+3”按钮 不能按预期的方式工作。仅仅 +1 </p>
          <DirectValueCounter />
        </div>
        <hr />
        <p>状态中的对象和数组的示例</p>

        <div>
          <h2>ObjectForm 表单(对象)</h2>
          <p>
            在此示例中，form
            状态变量保存一个对象。每个输入框都有一个变更处理函数，用整个表单的下一个状态调用
            setForm。{'{ ...form }'} 展开语法确保替换状态对象而不是改变它。
          </p>
          <ObjectForm />
        </div>

        <div>
          <h2>NestedForm 表单(嵌套对象)</h2>
          <p>
            在此示例中，状态更为嵌套。当你更新嵌套状态时，你需要复制一份正在更新的对象，以及向上“包含”它的所有对象。阅读{' '}
            <a
              target="_blank"
              href="https://zh-hans.react.dev/learn/updating-objects-in-state#updating-a-nested-object"
              rel="noreferrer"
            >
              更新嵌套对象
            </a>
            以了解更多。
          </p>
          <NestedForm />
        </div>

        <div>
          <h2>TaskApp 列表(数组)</h2>
          <p>
            在本例中，todos 状态变量保存一个数组。每个按钮的处理函数使用该数组的下一个版本调用
            setTodos。[...todos] 展开语法，todos.map() 和 todos.filter()
            确保状态数组被替换而不是改变。
          </p>
          <TaskApp />
        </div>

        <div>
          <h2>用 Immer 编写简洁的更新逻辑 </h2>
          <p>
            如果不能直接改变数组和对象来进行更新感觉很烦琐，你可以使用像 Immer
            这样的库来减少重复的代码。Immer
            可以让你编写简洁的代码，就像你可以直接改变对象一样，但在底层它执行的是不改变的更新：
          </p>
          <ImmerBucketList />
        </div>
        <hr />
        <p>传递初始化函数和直接传递初始状态之间的区别</p>
        <div>
          <h2>在 useState 中使用 传递初始化函数。</h2>
          <p>
            这个例子传递了初始化函数，因此 createInitialTodos
            函数仅在初始化期间运行。当组件重新渲染，例如你在输入框中键入内容时，它不会再次运行。
          </p>
          <TodoList />
        </div>

        <div>
          <h2>直接在 useState 中传递初始值</h2>
          <p>
            这个例子 没有 传递初始化函数，因此 createInitialTodos
            函数会在每次渲染时运行，比如当你在输入框中输入时。这种行为没有什么明显的差异，但这种代码是不那么高效的。
          </p>
          <DirectTodoList />
        </div>

        <div>
          <h2>使用 key 重置状态 </h2>
          <p>
            在{' '}
            <a
              href="https://zh-hans.react.dev/learn/rendering-lists"
              target="_blank"
              rel="noreferrer"
            >
              渲染列表
            </a>{' '}
            时，你经常会遇到 <code dir="ltr">key</code> 属性。然而，它还有另外一个用途。
          </p>
          <p>
            你可以{' '}
            <strong>
              通过向组件传递不同的 <code dir="ltr">key</code> 来重置组件的状态
            </strong>
            。在这个例子中，重置按钮改变 <code dir="ltr">version</code> 状态变量，我们将它作为一个{' '}
            <code dir="ltr">key</code> 传递给 <code dir="ltr">Form</code> 组件。当{' '}
            <code dir="ltr">key</code> 改变时，React 会从头开始重新创建 <code dir="ltr">Form</code>{' '}
            组件（以及它的所有子组件），所以它的状态被重置了。
          </p>
          <p>
            阅读{' '}
            <a
              href="https://zh-hans.react.dev/learn/preserving-and-resetting-state"
              target="_blank"
              rel="noreferrer"
            >
              保留和重置状态
            </a>{' '}
            以了解更多。
          </p>
          <KeyForm />
        </div>

        <div>
          <h2>存储前一次渲染的信息 </h2>
          <p>
            通常情况下，你会在事件处理函数中更新状态。然而，在极少数情况下，你可能希望在响应渲染时调整状态——例如，当
            props 改变时，你可能希望改变状态变量。 在大多数情况下，你不需要这样做：
            <p>
              {' '}
              如果你需要的值可以完全从当前 props 或其他 state 中计算出来，那么{' '}
              <a
                href="https://zh-hans.react.dev/learn/choosing-the-state-structure#avoid-redundant-state"
                target="_blank"
                rel="noreferrer"
              >
                完全可以移除那些多余的状态
              </a>{' '}
              。如果你担心重新计算的频率过高，可以使用{' '}
              <a
                href="https://zh-hans.react.dev/reference/react/useMemo"
                target="_blank"
                rel="noreferrer"
              >
                useMemo Hook
              </a>{' '}
              来帮助优化。 如果你想重置整个组件树的状态，
              <a href="https://zh-hans.react.dev/reference/react/useState#resetting-state-with-a-key">
                可以向组件传递一个不同的 key
              </a>
              。
            </p>
            <p>如果可以的话，在事件处理函数中更新所有相关状态。</p>
            <p>
              在极为罕见的情况下，如果上述方法都不适用，你还可以使用一种方式，在组件渲染时调用 set
              函数来基于已经渲染的值更新状态。
            </p>
            <p>
              假设你想显示计数器自上次更改以来是否有 增加或减少。count props
              无法告诉你这一点——你需要跟踪它的先前值。添加 prevCount
              状态变量来跟踪它，再添加另一个状态变量 trend 来保存计数是否增加或减少。比较 prevCount
              和 count，如果它们不相等，则更新 prevCount 和 trend。现在你既可以显示当前的 count
              props，也可以显示 自上次渲染以来它如何改变。
            </p>
            <p>
              请注意，在渲染时调用 set 函数时，它必须位于条件语句中，例如 prevCount !==
              count，并且必须在该条件语句中调用
              setPrevCount(count)。否则，你的组件将在循环中重新渲染，直到崩溃。此外，你只能像这样更新
              当前渲染 组件的状态。在渲染过程中调用 另一个 组件的 set 函数是错误的。最后，你的 set
              调用仍应{' '}
              <a
                href="https://zh-hans.react.dev/reference/react/useState#updating-objects-and-arrays-in-state"
                target="_blank"
                rel="noreferrer"
              >
                不直接改变 state 来更新
              </a>{' '}
              状态——这并不意味着你可以违反其他{' '}
              <a
                href="https://zh-hans.react.dev/learn/keeping-components-pure"
                target="_blank"
                rel="noreferrer"
              >
                纯函数
              </a>{' '}
              的规则。
            </p>
            <p>
              这种方式可能很难理解，通常最好避免使用。但是，它比在 effect
              中更新状态要好。当你在渲染期间调用 set 函数时，React 将在你的组件使用 return
              语句退出后立即重新渲染该组件，并在渲染子组件前进行。这样，子组件就不需要进行两次渲染。你的组件函数的其余部分仍会执行（然后结果将被丢弃）。如果你的条件判断在所有
              Hook 调用的下方，可以提前添加一个 return; 以便更早地重新开始渲染。
            </p>
          </p>
          <CountLabel />
        </div>
      </div>
    </>
  );
}
