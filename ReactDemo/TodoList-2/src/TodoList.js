import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
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