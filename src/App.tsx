import React from "react";
import "./App.css";
import { UserList } from "./UserList/UserList";
import { TextContainer } from "./TextContainer/TextContainer";

function App() {
  const users = [
    {
      userName: "Admin",
      id: 1
    },
    {
      userName: "Manager",
      id: 2
    },
    {
      userName: "Regular User",
      id: 3
    },
    {
      userName: "Test",
      id: 4
    }
  ];
  return (
    <div className="App">
      <UserList users={users} />
      <TextContainer />
    </div>
  );
}

export default App;
