
import './App.css';
import Header from './Components/Header';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      classDisp: false,
      functionDisp: false
    }
  }
  render() {
    return (
      <div className="App">
        <Header />

        <div className="ButtonContainer">
          <button className='App-Button' onClick={() => this.setState({ functionDisp: !this.state.functionDisp })}>To See styling in functional component</button>
          <button className='App-Button' onClick={() => this.setState({ classDisp: !this.state.classDisp })}>To See styling in class component</button>
        </div>
        <section className="App-Componet-Container">
          {this.state.functionDisp ? <FunctionalComponent /> : null}
          {this.state.classDisp ? <ClassComponent /> : null}
        </section>

      </div>
    );
  }
}

export default App;