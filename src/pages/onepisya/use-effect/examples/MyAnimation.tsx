/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-29 02:33:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:18:49
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/MyAnimation.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect, useRef, useState } from 'react';
type HeadingNode = HTMLHeadingElement | null;

class FadeInAnimation {
  [x: string]: any; // 临时解决类型问题
  node: HeadingNode;
  constructor(node: HeadingNode) {
    this.node = node;
  }
  start(duration: number) {
    this.duration = duration;
    if (this.duration === 0) {
      // 立刻跳转到最后
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // 开始动画
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1); // 最大的数字为 1
    // 当 timePassed 超过 duration 毫秒后，不再更新 frameId 以及 运行 onFrame
    // 浮点数 0 ~ 1
    this.onProgress(progress);
    if (progress < 1) {
      // 仍然有更多的帧要绘制
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress: number) {
    // 0 - 1 的浮点数
    if (this.node) {
      this.node.style.opacity = progress as unknown as string; // 设置透明度
    }
  }
  stop() {
    cancelAnimationFrame(this.frameId);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}

function Welcome() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(3000);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0, // 通过设置 opacity 值来控制动画的进度
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      }}
    >
      Welcome
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
