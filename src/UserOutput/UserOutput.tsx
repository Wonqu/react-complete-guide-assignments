import React from "react";
import "./UserOutput.css";
import { EMPTY_USERNAME_STRING } from "../consts";

interface UserOutputInterface {
  id: number;
  userName: string;
}

export const UserOutput = (props: UserOutputInterface) => {
  const userIdParagraph =
    props.userName !== EMPTY_USERNAME_STRING ? (
      <p className={"UserOutput-id"}>ID: {props.id}</p>
    ) : null;
  return (
    <div className={"UserOutput"}>
      <p className={"UserOutput-username"}>
        <b>{props.userName}</b>
      </p>
      {userIdParagraph}
    </div>
  );
};
