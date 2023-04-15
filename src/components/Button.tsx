import React from "react";

const Button = ({ text, onClick, width }: any) => {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan p-4 text-base font-medium text-white tracking-widest hover:shadow-md ${
        width ? width : "w-full"
      } uppercase `}
    >
      {text}
    </button>
  );
};

export default Button;
