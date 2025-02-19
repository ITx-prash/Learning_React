import React from "react";

function Expn_JSX() {
  const multiply = (a, b) => {
    return a * b;
  }
  const value = multiply(5, 10);
  return (
    <div>
    
      <p>5*10={value}</p>
    </div>
  );
}

export default Expn_JSX;
