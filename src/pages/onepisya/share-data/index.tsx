import { useState } from 'react';

function MyButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

/*
 ❌ https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html
 违反了规则
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
}
*/
const ShareData = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1> 共享数据 一起更新 counter</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
};

export default ShareData;
