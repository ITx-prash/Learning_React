import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "Rajesh", age: 45 },
  ];

  return (
    <div>
      {users.map((usr) => (
        <div key={usr["id"]}>
          <br />
          <h1>Name:{usr.name}</h1>
          <h1>Age: {usr.age}</h1>
        </div>
      ))}
    </div>
  );
}
export default UserList;
