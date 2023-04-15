import React from "react";
import Sidebar from "../Sidebar";

const Charts = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="lg:w-[1190px] w-full">
        <p>Charts page</p>
      </div>
    </div>
  );
};

export default Charts;
