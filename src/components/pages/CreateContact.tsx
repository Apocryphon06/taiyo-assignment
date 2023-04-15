import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Button from "../Button";
import Input from "../Input";
import RadioButton from "../RadioButton";
import { Link } from "react-router-dom";

const radioItems = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Inactive",
    value: "Inactive",
  },
];

const CreateContact = ({ edit }: any) => {
  const initialStates = {
    firstName: "",
    lastName: "",
    status: "Active",
  };

  const [params, setParams] = useState(initialStates);
  console.log(params);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="lg:w-[1190px] w-full">
        <p className="text-center text-lg font-medium text-primary p-4 uppercase tracking-widest">
          {edit ? "Edit Contact" : "Create Contact"}
        </p>

        <div className="border border-primary lg:w-[450px] m-auto p-4 rounded flex flex-col gap-5">
          <Input
            label="First Name"
            placeholder="John"
            onChange={handleChange}
            value={params.firstName}
            name="firstName"
          />

          <Input
            label="Last Name"
            placeholder="Hancock"
            onChange={handleChange}
            value={params.lastName}
            name="lastName"
          />

          <div className="flex items-center lg:gap-[85px]">
            <p className="text-primary font-medium">Status</p>

            <div className="w-[100px]">
              <RadioButton
                name="type"
                onChange={handleChange}
                items={radioItems}
                defaultValue={params.status}
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link to="/contacts">
              <Button
                text={edit ? "Update" : "Submit"}
                width="lg:w-[300px] rounded"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
