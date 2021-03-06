import React, {Component} from 'react';


class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value    //input里面的id和state的三项相同，state[id]就能对应到
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();  //通知浏览器不要执行与事件关联的默认动作
    this.props.addNinja(this.state);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}> 
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="name">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button>Submit</button>

        </form>
      </div>
    )
  }
}

export default AddNinja;