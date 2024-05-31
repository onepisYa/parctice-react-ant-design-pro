/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 23:13:57
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 23:31:23
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/task/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import AddTask from './AddTask';
import styles from './styles.less';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContext';

export default function TaskApp() {
  return (
    <div className={styles['onepisya-task-app']}>
      <TasksProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
