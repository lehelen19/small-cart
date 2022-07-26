/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';

function Cart({ cartItems, onAdd, onRemove }) {
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Your cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button type="button" onClick={() => onAdd(item)} className="add">+</button>
              <button type="button" onClick={() => onRemove(item)} className="remove">-</button>
            </div>

            <div className="col-2 text-right">
              {item.qty}
              {' '}
              x $
              {item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Cart;
