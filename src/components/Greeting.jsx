import React from "react";

function Greeting() {
  const usrName = "Prashant";
  const greet = (usrName) => {
    return `Hello ${usrName}, how are you doing?`;
  };
  const user = greet(usrName);
  const date= new Date();

  
  return (
    <div>
      <h1 className="text-3xl my-5">{user}</h1>
      <p className="my-3">Date: {date.getDate()}</p>
    </div>
  );
}

export default Greeting;
