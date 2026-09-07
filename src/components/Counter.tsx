import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(10);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <h3 className="text-2xl">
        Contador: <small className="font-bold">{count}</small>
      </h3>

      <div>
        <button
          onClick={() => increaseBy(+1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          +1
        </button>
        <button
          onClick={() => increaseBy(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
