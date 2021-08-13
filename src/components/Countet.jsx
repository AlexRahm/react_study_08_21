import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(5);

    function incriment() {
        setCount(count + 1);
    }

    function decriment() {
        setCount(count - 1);
    }

    return (
        <div>
            <br />
            <h2>{count}</h2>
            <button onClick={incriment}>incriment</button>
            <button onClick={decriment}>decriment</button>
        </div>
    );
}

export default Counter;
