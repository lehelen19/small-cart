/* eslint-disable react/prop-types */
import React from 'react';

function Product({ product }) {
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>
        $
        {product.price}
      </div>
      <div>
        <button type="button" className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
