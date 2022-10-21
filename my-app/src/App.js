import logo from './logo.svg';
import React from 'react'
import Stock from './Stock'
import Currencies from './Currencies';
import './App.css';

function App() {
  return (
    <div className = "App">
      <Stock />

      <Currencies />
    </div>
  )
}

export default App;
