import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
const UpdateUI = () => {
  return (
    <>
      <MyButton />
      <MyButton />
    </>
  );
};

export default UpdateUI;
