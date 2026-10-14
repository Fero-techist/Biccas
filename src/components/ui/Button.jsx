import React from "react";

const Button = ({ children, variant = "primary", className = "" }) => {
  const styles = {
    primary:
      "rounded-full bg-[#4fbd98] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#43aa88]",
    outline:
      "rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50",
  };

  return (
    <div>
      <button className={`${styles[variant]} ${className}`}>{children}</button>
    </div>
  );
};

export default Button;
