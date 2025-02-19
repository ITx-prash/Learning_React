import React from "react";

function Greeting() {
  const usrName = "Prashant";
  const greet = (usrName) => {
    return `Hello ${usrName}, how are you doing?`;
  };
  const user = greet(usrName);
  const currentDate = new Date();

  console.log(currentDate); // Outputs something like: "2023-10-05T14:48:00.000Z"
  return (
    <div>
      <h1>{user}</h1>
      <p>{currentDate.toDateString()}</p>
    </div>
  );
}

export default Greeting;
