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
        <ul key={usr["id"]}>
          <li>
            {usr.name} : {usr.age}
          </li>
        </ul>
      ))}
    </div>
  );
}
export default UserList;
