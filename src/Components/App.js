import React, { useState } from 'react';

export const App = () => {
    const [count, setCount] = useState(0);
    return <div>{count}</div>;
};
