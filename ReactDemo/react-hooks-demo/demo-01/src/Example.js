import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log('来Index页面')
        return ()=>{
            console.log('离开Index')
        }
    },[])
    return <h2>Index Page</h2>
}
function List(){
    useEffect(()=>{
        console.log('来List页面')
    })
    return <h2>List Page</h2>
}


function Example(){
    const [ count, setCount ] = useState(0);
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('===========')
        }
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>

            <Router>
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/list/">List</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}

export default Example;