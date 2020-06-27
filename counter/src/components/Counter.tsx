import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp = (): void => {
    setCount(count + 1);
  };
  const onCountDown = (): void => {
    setCount(count - 1);
  };
  return (
    <React.Fragment>
      <p>Count：{count}</p>
      <button onClick={onCountUp} className='ui primary button'>
        Increment
      </button>
      <button onClick={onCountDown} className='ui red button'>
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
