/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 01:54:15
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 01:58:37
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-context/examples/Page/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import Heading from './Heading';
import Section from './Section';

export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
