import React from "react";

const Products = ({ products, ...props }) => {
  return (
    <div>
      {products.map(({ productId, productOwner, productName }) => (
        <p>
          {productId} - {productName} || {productOwner}
        </p>
      ))}
    </div>
  );
};

export default Products;
