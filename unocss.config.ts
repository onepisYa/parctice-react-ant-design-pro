/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-08 14:55:52
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-08 15:20:05
 * @FilePath: /parctice-react-ant-design-pro/unocss.config.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
// unocss.config.ts

import { defineConfig, presetAttributify, presetTypography, presetUno } from 'unocss';

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [presetAttributify({ strict }), presetUno(), presetUno(), presetTypography()],
  });
}

export default createConfig();
