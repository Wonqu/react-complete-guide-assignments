import React, { useState } from "react";

import { LengthCounter } from "../LengthCounter/LengthCounter";
import { CharList } from "../CharList/CharList";
import { ValidationComponent } from "../ValidationComponent/ValidationComponent";

export const TextContainer = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <LengthCounter text={text} setText={setText} />
      <ValidationComponent textLength={text.length} />
      <CharList text={text} />
    </div>
  );
};
