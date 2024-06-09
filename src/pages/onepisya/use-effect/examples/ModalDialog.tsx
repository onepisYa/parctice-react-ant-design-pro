/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-29 03:06:03
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:27:21
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/ModalDialog.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { MutableRefObject, useEffect, useRef, useState } from 'react';

function ModalDialog({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const ref: MutableRefObject<HTMLDialogElement | null> = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog: HTMLDialogElement | null = ref.current as HTMLDialogElement;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShow(true)}>
        Open dialog
      </button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button
          type="button"
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
    </>
  );
}
