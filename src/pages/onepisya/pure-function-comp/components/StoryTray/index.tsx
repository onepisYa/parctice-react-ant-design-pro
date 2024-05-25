/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-26 00:25:34
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-26 01:10:09
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/pure-function-comp/components/StoryTray/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */

/*
你所在公司的 CEO 要求你在在线时钟 app 中添加 “故事”，你不能拒绝。你编写了一个 StoryTray 组件，它接受一个 stories 列表，后跟一个 “Create Story” 占位符。

你在作为 props 的 stories 数组末尾 push 了一个假故事来实现 “Create Story” 占位符。但出于某种原因，“Create Story” 出现了不止一次。请修复这个问题。
*/
export type Story = {
  id: number | 'create';
  label: string;
};

export default function StoryTray({ stories }: { stories: Story[] }) {
  // stories.push({
  //   id: 'create',
  //   label: 'Create Story',
  // });
  // ❌ 问题所在、 修改了传递过来的 stories 、 违反了可变性。
  // ✅  正确做法 、直接在模板中渲染 create 即可
  // ✅  正确做法 、 或者 slice 创建副本、然后再 push 、然后再渲染到 模板中
  /*
  const localStories = stories.slice();
  stories.push({
    id: 'create',
    label: 'Create Story',
  });
  */

  return (
    <ul>
      {' '}
      {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}
