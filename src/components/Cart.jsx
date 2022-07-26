/* eslint-disable react/prop-types */
import React from 'react';

function Cart({ cartItems, onAdd }) {
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Your cart is empty</div>}
      </div>
    </aside>
  );
}

export default Cart;
