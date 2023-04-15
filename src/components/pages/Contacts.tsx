import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Sidebar from "../Sidebar";

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="lg:w-[1190px] w-full">
        <Button
          text="Create Contact"
          onClick={() => {
            navigate("/contacts/create");
          }}
        />
        <p>Contacts page</p>
      </div>
    </div>
  );
};

export default Contacts;
