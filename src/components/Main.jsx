/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

function Main({ products }) {
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Main;
