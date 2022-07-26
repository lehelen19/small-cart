/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';

function Cart({ cartItems, onAdd, onRemove }) {
  const cartTotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const tax = cartTotal * 0.0725;
  const shippingCost = cartTotal > 250 ? 0 : 50;
  const finalTotal = cartTotal + tax + shippingCost;

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
        {/* Display summary of costs */}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Cart Total:</div>
              <div className="col-1 text-right">
                $
                {cartTotal.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Shipping and Handling:</div>
              <div className="col-1 text-right">
                $
                {shippingCost.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Taxes:</div>
              <div className="col-1 text-right">
                $
                {tax.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2"><span className="bold">Total Cost:</span></div>
              <div className="col-1 text-right">
                <span className="bold">
                  $
                  {finalTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Cart;
