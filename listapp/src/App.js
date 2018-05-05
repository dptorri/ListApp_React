import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

console.log('App.js is running');

class App extends Component {

  render() {
    return (     
      <div>
        <h1>List App</h1>
        <p>some basic information</p>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
      </div>
    );
  }
}



export default App;
