import React, { useState } from "react";
import "./UserInput.css";

interface UserInputInterface {
  setUserName: (value: string | ((prevVar: string) => string)) => void;
  initialUserName: string;
}

export const UserInput = (props: UserInputInterface) => {
  const [userInput, setUserInput] = useState(props.initialUserName);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    props.setUserName(e.target.value);
  };
  return (
    <div className={"UserInput"}>
      <input
        className={"UserInput-input"}
        onChange={handleChange}
        value={userInput}
      />
    </div>
  );
};
