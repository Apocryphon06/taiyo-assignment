import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Button from "../Button";
import Input from "../Input";
import RadioButton from "../RadioButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "../middleware/store";
import { updateContact } from "../middleware/store";
import { showToastMessage } from "../utils/helpers";
import { nanoid } from "nanoid";

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
  // getting data from Link component for edit contact
  const { state } = useLocation();

  console.log(state, "from edit route");

  const dispatch = useDispatch();

  // settings current contact details
  useEffect(() => {
    setParams({
      firstName: state?.firstName,
      lastName: state?.lastName,
      status: state?.status,
    });
  }, [state]);

  // initial params
  const initialStates = {
    firstName: "",
    lastName: "",
    status: "",
  };

  const [params, setParams] = useState(initialStates);
  console.log(params);

  // to capture user input
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  // to handle radio input
  const handleRadio = (e: any) => {
    setParams({ ...params, status: e.target.value });
  };

  const navigate = useNavigate();

  // to create a new contact
  const handleSubmit = () => {
    // console.log(params)
    // if (
    //   params?.firstName === "" ||
    //   params?.lastName == "" ||
    //   params?.status == ""
    // ) {
    //   showToastMessage("Please enter valid details", "error");
    //   return;
    // }
    // else{
    //   dispatch(addContact({ ...params, id: nanoid() }));
    //   navigate('/contacts')
    // }

    dispatch(addContact({ ...params, id: nanoid() }));
    navigate("/contacts");
  };

  // to update the existing contact details
  const handleUpdate = () => {
    dispatch(updateContact({ ...params, id: state.id }));
    navigate("/contacts");
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <Sidebar />
      <div className="lg:w-[1190px] w-full">
        <p className="text-center text-lg font-medium text-primary p-4 uppercase tracking-widest">
          {edit ? "Edit Contact" : "Create Contact"}
        </p>

        <div className="border border-primary lg:w-[450px] lg:m-auto m-5 p-4 rounded flex flex-col gap-5">
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

          <div className="flex items-center lg:gap-[85px] lg:justify-start md:justify-between gap-12">
            <p className="text-primary font-medium">Status</p>

            <div className="w-[100px]">
              <RadioButton
                // name="status"
                onChange={handleRadio}
                items={radioItems}
                defaultValue={edit ? state.status : params?.status}
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            {/* <Link to="/contacts"> */}
            <Button
              onClick={edit ? handleUpdate : handleSubmit}
              text={edit ? "Update" : "Submit"}
              width="lg:w-[300px] rounded"
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
