import React from "react";

export default function TryIt({ text, children }) {
  return (
    <div className="center">
      <div className="flex-center big">
        <div className="try">{text || "Click! →"}</div>
        {children}
      </div>
    </div>
  );
}
