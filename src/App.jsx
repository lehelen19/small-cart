import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main />
        <Cart />
      </div>
    </div>
  );
}

export default App;
