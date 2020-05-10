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
    let ninjas = [...this.state.ninjas, ninja]; //不用push，不改变state，把state数组加上新的赋值给一个新的ninjas
    this.setState({
      ninjas:ninjas
    })
  }
  deleteNinja = (id) => {
    //console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });   //通过过滤的方法来删除
    this.setState({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>my first React App</h1>
        <p>welcome</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}
export default App;
