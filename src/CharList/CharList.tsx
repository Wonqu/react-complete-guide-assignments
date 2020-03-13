import React from "react";
import { CharComponent } from "../CharComponent/CharComponent";

interface CharListInterface {
  text: string;
}

export const CharList = (props: CharListInterface) => {
  return (
    <div>
      {props.text.split("").map((char: string) => (
        <CharComponent character={char} />
      ))}
    </div>
  );
};
