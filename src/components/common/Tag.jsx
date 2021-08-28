import React from "react";

function Tag({ children }) {
  return (
    <div className="tag">
      <div className="inner__tag">{children}</div>
    </div>
  );
}

export default Tag;
