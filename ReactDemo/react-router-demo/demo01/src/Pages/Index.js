import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {uid:123,title:'个人博客-1'},
                {uid:234,title:'个人博客-2'},
                {uid:345,title:'个人博客-3'},
            ]
         }
    }
    render() { 
        return (
            <div>
                <h2>My Blog</h2>
                <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index}><Link to={'/list/'+item.uid}>{item.title}</Link></li>
                        )
                    })
                }
            </ul>
            </div>
            
        );
    }
}
 
export default Index;