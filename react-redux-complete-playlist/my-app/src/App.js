import React,{ Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
class App extends Component {
  state = {
    ninjas: [
      {name:"Ray", age:"25", belt:"Red", id :1},
      {name:"Irs", age:"15", belt:"Black", id : 2},
      {name:"Bra", age:"35", belt:"Green", id : 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>my first React App</h1>
        <p>welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
