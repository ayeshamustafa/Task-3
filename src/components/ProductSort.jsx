import React from 'react';
import products from "../ProductData/data";

const ProductSort = () => {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    const sortedProductList = sortedProducts.map(product => <li key={product.id}>{product.name}: ${product.price.toFixed(2)}</li>);
    return (
      <div>
        <h2>Products Sorted by Price (Ascending): </h2>
        <ul>
          {sortedProductList}
        </ul>
      </div>
    );
  };
  
  export default ProductSort;
