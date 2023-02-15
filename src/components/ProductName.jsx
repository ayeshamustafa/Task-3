import React from 'react';
import products from "../ProductData/data";

const ProductName = () => {
    const productNames = products.map(product => <li key={product.id}>{product.name}</li>);
    return (
      <div>
        <h2>Product Names: </h2>
        <ul>
          {productNames}
        </ul>
      </div>
    );
  };
  
  export default ProductName;
