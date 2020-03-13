import React from "react";

import "./UserList.css";
import { User, UserInterface } from "../User/User";

interface UserListType {
  users: Array<UserInterface>;
}

export const UserList = (props: UserListType) => (
  <div className={"UserList"}>
    {props.users.map((user, _) => (
      <User id={user.id} userName={user.userName} key={user.id} />
    ))}
  </div>
);
