import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import './App.css';

function App() {
  const { products } = data;
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main products={products} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
