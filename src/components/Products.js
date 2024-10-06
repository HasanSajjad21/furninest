// src/components/Products.js
import React from 'react';

const Products = () => {
  return (
    <section className="products" id="products">
      <h2>Shop Our Bestsellers</h2>
      <div className="product-cards">
        <div className="product-card">
          <h3>Elegant Single Sofa</h3>
          <p>$399</p>
          {/* Add product image here */}
        </div>
        <div className="product-card">
          <h3>Comfort Armchair</h3>
          <p>$199</p>
          {/* Add product image here */}
        </div>
        <div className="product-card">
          <h3>Sleek Bed</h3>
          <p>$1499</p>
          {/* Add product image here */}
        </div>
        <div className="product-card">
          <h3>Dining Table</h3>
          <p>$399</p>
          {/* Add product image here */}
        </div>
      </div>
    </section>
  );
};

export default Products;
