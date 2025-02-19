import React from "react";

function Expn_JSX() {
  const name = "Prashant";
  const greet = (name) => {
    return `Hello ${name}, how are you doing?`;
  };
    const user = greet(name);
  return (
    <div>
      <p>{2 + 2}</p>
    
      <p>{user}</p>
    </div>
  );
}

export default Expn_JSX;
