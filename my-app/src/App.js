import logo from './logo.svg';
import React from 'react'
import Stock from './Stock'
import './App.css';

function App() {
  return (
    <div class="All">
      <div id="header">
        <div class="buttons">
            <button class="button" type="button">
                <span>Currency</span>
            </button>
        </div>
        <header>Stock and currency analyse platform</header>
        <div class="buttons">
            <button class="button" type="button">
              <span>Stock</span>
            </button>
        </div>
      </div>
      <div>
        <form>
          <div>
            <h1>Welcome to our website</h1>
            <p>This website allows you to analyse the value of a stock or the value of a currency</p>
            <p>Please choose the one you want by cliking on the corresponding button on the top of the page</p>
          </div>
        </form>
      </div>
      <footer>
        <div>
          <p>Advance Web Project</p>
          <p>Baligand Antoine - Wielgos Wiktor - Peltier Thibault - Grégoire Aurélien</p>
        </div>
      </footer>
    </div>
  )
}

export default App;
