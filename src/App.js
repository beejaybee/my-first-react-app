  import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js'
import MyComponent from './myComponent';
import { ColoredBlock } from './ColoredBlock';



export class App extends Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <Clock />   
            <MyComponent />
            <ColoredBlock />
          </header>
        </div>
      );
  }
};
