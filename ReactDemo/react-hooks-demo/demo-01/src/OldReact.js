import React,{Component} from 'react'

class OldReact extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    componentDidMount(){
        console.log(`componentDidMount => you clicked ${this.state.count} times `)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate => you clicked ${this.state.count} times `)
    }
    render() { 
        return ( 
            <div>
                <div>你已经点击了{this.state.count}次</div>
                <button onClick={this.clickBtn.bind(this)}>点击</button>
            </div>   
        );
    }
    clickBtn(){
        this.setState({count: this.state.count+1})
    }
}
 
export default OldReact;