import React from "react";

function Number({ title, Number }) {
  return (
    <div className="number-card">
      <h2 className="number-title">{title}</h2>
      <p className="number">{Number}</p>
    </div>
  );
}

export default Number;
