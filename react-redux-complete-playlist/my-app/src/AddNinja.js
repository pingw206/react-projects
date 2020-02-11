import React, {Component} from 'react'
import Ninjas from './Ninjas'

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}> 
          <lable htmlFor="name">Name:</lable>
          <input type="text" id="name" onChange={this.handleChange} />
          <lable htmlFor="name">Age:</lable>
          <input type="text" id="age" onChange={this.handleChange} />
          <lable htmlFor="name">Belt:</lable>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button>Submit</button>

        </form>
      </div>
    )
  }
}

export default AddNinja;