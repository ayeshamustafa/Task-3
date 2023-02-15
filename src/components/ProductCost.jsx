import React from 'react';
import products from "../ProductData/data";

const ProductCost = () => {
    const totalCost = products.reduce((acc, product) => acc + product.price, 0);
    return (
      <div>
        <h2>Total cost of all products: ${totalCost.toFixed(2)}</h2>
      </div>
    );
  };
  
  export default ProductCost;
