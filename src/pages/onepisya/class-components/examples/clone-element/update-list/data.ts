/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 08:32:13
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 09:22:34
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/clone-element/update-list/data.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
export const products: Product[] = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

export type Product = {
  title: string;
  id: number;
  isHighlighted?: boolean;
};
