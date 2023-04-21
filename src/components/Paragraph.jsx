import React, { useState } from "react";

const Paragraph = () => {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleDisplay = () => {
    setDisplayValue(value);
  };

  return (
    <div>
      <h2>{displayValue}</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={handleDisplay}> Отобразить</button>
    </div>
  );
};

export default Paragraph;
