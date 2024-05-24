/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-24 21:24:33
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-24 21:34:17
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/react-phd/react-phd-type.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
export type Product = {
  category: CategoryEnum;
  price: string;
  stocked: boolean;
  name: string;
};

export enum CategoryEnum {
  Fruits = 'Fruits',
  Vegetables = 'Vegetables',
}
