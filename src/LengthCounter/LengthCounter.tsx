import React, { useState } from "react";

interface LengthCounterInterface {
  text: string;
  setText: (value: string | ((prevVar: string) => string)) => void;
}

export const LengthCounter = (props: LengthCounterInterface) => {
  const [inputText, setInputText] = useState(props.text);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setText(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <div className={"LengthCounter"}>
      <input value={inputText} onChange={handleChange} />
      <p>Text length: {props.text.length}</p>
    </div>
  );
};
