import React from 'react';
import products from "../ProductData/data";

const SaleProducts = () => {
    const saleProducts = products.filter(product => product.onSale);
    const saleProductList = saleProducts.map(product => <li key={product.id}>{product.name} - Sale Price: ${product.price.toFixed(2)}</li>);
    return (
      <div>
        <h2>Products on Sale: </h2>
        <ul>
          {saleProductList}
        </ul>
      </div>
    );
  };
  
  export default SaleProducts;
