import React from 'react';
import './App.css';
import Component from './component/Component'
import Dropable from './dropable/dropable';

const COMPONENTS = [
  {
    name: 'Block1',
    id: 1
  },
  {
    name: 'Block2',
    id: 2
  },
  {
    name: 'Block3',
    id: 3
  }
]

let length = COMPONENTS.length;

class App extends React.Component {

state = {
  posX: 0,
  posY: 0
}

  onDrag = (e) => {
    // const {posX, posY} = this.state;
        this.setState({
          posX: e.screenX,
          posY: e.screenY
        });
  }
  render() {
    
    const {posX, posY} = this.state;
    console.log('state',posX, posY);

    return <div className="App">
      {COMPONENTS.map((item, index) => {
        return <Component 
          key={item.id}
          name={item.name}
          draggable={true}
          onDrag={this.onDrag}
          number={index}
          count={length}
          posX={posX}
          posY={posY}
        />
      })}
      <Dropable/>
    </div>
  }
}

export default App;
