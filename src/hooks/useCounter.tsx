import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
    const [count, setCount] = useState(initialValue);

    const increaseBy = (value: number) => {
        setCount(Math.max(value + count, 0));
    };

    return {
        // Properties
        count,

        // Actions
        increaseBy,

    };
};