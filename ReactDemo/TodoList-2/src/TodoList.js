import React, { Component } from 'react';
import store from './store'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() { 
        return (
            <div>
                <div>
                    <input />
                    <button>提交</button>
                </div>
                <ul>
                    <li>吃饭</li>
                    <li>睡觉</li>
                </ul>
            </div> 
        );
    }
}
 
export default TodoList;