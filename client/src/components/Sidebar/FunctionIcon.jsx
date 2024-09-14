import React from "react";

const FunctionIcon = ({ src, alt = "functionIcon", className = "" }) => {
  return (
    <div className={`function-icon ${className}`}>
      <img src={src} alt={alt} className="w-10 h-10" />
    </div>
  );
};

export default FunctionIcon;
