import React, { useState } from "react";

export default function ButtonBox({ children, name }) {
  const [fontSize, setFontSize] = useState(24);

  return (
    <div className="box">
      <div className="box__button" style={{ fontSize: `${fontSize}px` }}>
        {children}
      </div>
      <p className="box__title">{name}</p>
      <div className="box__buttons">
        <button onClick={() => fontSize < 60 && setFontSize(fontSize + 4)}>
          +
        </button>
        <span>{fontSize}px</span>
        <button onClick={() => fontSize > 0 && setFontSize(fontSize - 4)}>
          -
        </button>
      </div>
    </div>
  );
}
