import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import './App.css';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]); // Cart items is empty

  const onAdd = (product) => {
    const doesExist = cartItems.find((x) => x.id === product.id);
    if (doesExist) {
      // eslint-disable-next-line max-len
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...doesExist, qty: doesExist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Cart onAdd={onAdd} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
