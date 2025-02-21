import React from "react";

function Product({name,price}) {
  return (
    <div>
      <h1>Product Name: {name}</h1>
      <p>Price: {price}</p>
    </div>
  );
}

export default Product;
