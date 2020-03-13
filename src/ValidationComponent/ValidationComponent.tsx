import React from "react";

interface ValidationComponentInterface {
  textLength: number;
}

export const ValidationComponent = (props: ValidationComponentInterface) => {
  const tooLong = props.textLength > 10;
  const tooShort = props.textLength < 5;
  const validationText = tooLong
    ? "Text too long"
    : tooShort
    ? "Text too short"
    : "";
  return validationText !== "" ? <p>{validationText}</p> : null;
};
