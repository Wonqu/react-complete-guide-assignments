import React from "react";

import "./CharComponent.css";

interface CharComponentInterface {
  // Note: TypeScript does not have a single character type
  character: string;
}

export const CharComponent = (props: CharComponentInterface) => {
  return <div className={"CharComponent"}>{props.character}</div>;
};
