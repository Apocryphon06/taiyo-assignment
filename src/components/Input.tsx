import React from "react";

const Input = ({ label, placeholder, onChange,value,name }: any) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-primary font-medium">{label}</p>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        className="outline-cyan p-3 lg:w-[280px] text-base border border-secondary rounded placeholder:text-[#808080]"
      />
    </div>
  );
};

export default Input;
