import React, {Component} from 'react';

class AddTodo extends Component{
  state = {
    content:''
  }
  handleChange= (e) =>{
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({content:''}); //这个和下面的value={this.state.content}使输入框每次重新清空
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add your todo things</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/> 
        </form>
      </div>
    )
  }
}

export default AddTodo;