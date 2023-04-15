import React from "react";

const Button = ({ text, onClick, width, variant }: any) => {
  return (
    <>
      {variant === "edit" ? (
        <button onClick={onClick} className="border-yellow-500 p-2 border text-base text-yellow-500 uppercase w-full rounded hover:shadow-md">
          {text}
        </button>
      ) : variant === "delete" ? (
        <button onClick={onClick} className="border-red-400 p-2 border text-base text-red-400 hover:bg-red-100 uppercase w-full rounded hover:shadow-md">
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`bg-cyan p-4 text-base font-medium text-white tracking-widest hover:shadow-md ${
            width ? width : "w-full"
          } uppercase `}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
