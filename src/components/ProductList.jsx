import React from 'react'

function ProductList() {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];
  return (
    <div><br></br>ProductList:<br></br>
    {products.map((indiProducts)=>(
        <ul key={indiProducts["id"]}>
            <li> {indiProducts.name} : {indiProducts["price"]}</li>
        </ul>
       ))}
    
    
    </div>
  )
}

export default ProductList