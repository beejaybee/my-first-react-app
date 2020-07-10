import React from 'react';
import { ChangeColorButton } from './ChangeColorButton.js';


export class ColoredBlock extends React.Component {

    state = {
        backgroundColor: 'red'
    }

changeColor = () => {
    this.setState ((prevState) => {
    let newColor = prevState.backgroundColor === 'red' ? 'blue' : 'red';
    return {
        backgroundColor: newColor
    };
 });
}

  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.backgroundColor}}>
        <ChangeColorButton onClick={this.changeColor} currentColor={this.state.backgroundColor}></ChangeColorButton>
      </div>
    )
  }
} 
