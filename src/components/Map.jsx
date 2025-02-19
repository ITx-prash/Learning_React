import React from "react";

function Map() {
  const users = ["Ram", "Hari", "Gita", "Rohan"];
  return (
    <div className="my-4">
      {users.map((name) => (
        <ul key={name}>
          <li>{name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Map;
