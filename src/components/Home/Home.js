import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    } 
    return (
        <div className="App">
            <button onClick={increaseCount}>Click</button>
            <br />
            <h4>My Count: {count}</h4>
            <br />
            <h3>Double Count: {count * 2}</h3>
        </div>
    );
};

export default Home;