import React, { useState } from "react";
import "./User.css";

import { UserInput } from "../UserInput/UserInput";
import { UserOutput } from "../UserOutput/UserOutput";
import { EMPTY_USERNAME_STRING } from "../consts";

export interface UserInterface {
  id: number;
  userName: string;
}

export const User = (props: UserInterface) => {
  const [userName, setUserName] = useState(props.userName);
  return (
    <div className={"User"}>
      <UserOutput
        id={props.id}
        userName={userName.length > 0 ? userName : EMPTY_USERNAME_STRING}
      />
      <UserInput setUserName={setUserName} initialUserName={userName} />
    </div>
  );
};
