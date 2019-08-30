import React, { Component } from 'react';
import './App.css'
import Rolldice from './Rolldice'
class App extends Component{
  render(){
    return(
      <div className = 'App'>
          <Rolldice/>
      </div>
    );
  }
}
export default App