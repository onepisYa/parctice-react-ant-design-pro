/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 15:33:41
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 15:38:21
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/custom-hook/examples/Form.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useFormInput } from '../hooks/useFormInput';

export default function Form() {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  return (
    <>
      <label className="block ml-4">
        First name:
        <input {...firstNameProps} />
      </label>
      <label className="block ml-4">
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
