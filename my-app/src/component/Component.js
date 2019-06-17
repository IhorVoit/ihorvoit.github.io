import React from 'react';
import './Component.css';

class Component extends React.Component {


  render() {
    const { number,count, name, draggable, onDrag, posX, posY} = this.props;

    return <div 
      className="Component"
      draggable={draggable}
      onDrag={onDrag}
      style={{transform: `translate(${posX}px, ${posY}px)`}}
    >
      <p>{name}</p>
      <span>number of Components {number+1}</span>
    </div>  
  }
}

export default Component;
