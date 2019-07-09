import React, { Component } from 'react';
import {Game} from './containers/Game';
class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <Game/>
      </div>
    );
  }
}

export default App;