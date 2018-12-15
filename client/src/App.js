import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import ShoppingList from './components/ShoppingList'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
