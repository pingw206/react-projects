import React, { useState, createContext, useContext} from 'react';

const CountContext = createContext();

function Counter(){
    const count = useContext(CountContext)
    return (<h2>子组件接收{count}</h2>)
}

function Example3(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times </p>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>

        </div>
    )
}

export default Example3;