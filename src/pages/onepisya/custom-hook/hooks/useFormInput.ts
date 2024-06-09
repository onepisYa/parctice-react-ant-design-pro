/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 15:33:01
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 15:44:17
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/hooks/useFormInput.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useState } from 'react';

export function useFormInput(initialValue: string | number) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
