import React from "react";

function ProductInfo() {
  const product = {
    name: "Laptop",
    price: "$1500",
    availabiliy: "In stock",
  };
  return (
    <div>
      
        
        Product Details:
        
         <h1> Name:{product.name}</h1>
         <h1> Price:{product.price}</h1>
         <h1> Availability:{product.availabiliy}</h1>
        
      
    </div>
  );
}

export default ProductInfo;
