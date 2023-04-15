import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Card from "../Card";
import Sidebar from "../Sidebar";
import notfound from "../assets/notFound.svg";

const Contacts = () => {
  const navigate = useNavigate();
  
  const [details, setDetails] = useState([
    {
      id: nanoid(),
      firstName: "Hrithik",
      lastName: "Chandrashekar",
      status: "Inactive",
    },
    {
      id: nanoid(),
      firstName: "Nishchal",
      lastName: "Chandrashekar",
      status: "Inactive",
    },
    {
      id: nanoid(),
      firstName: "John",
      lastName: "Doe",
      status: "Active",
    },
    {
      id: nanoid(),
      firstName: "Donald",
      lastName: "Harris",
      status: "Inactive",
    },
    {
      id: nanoid(),
      firstName: "Nick",
      lastName: "Cage",
      status: "Active",
    },
  ]);

  const deleteContact = (id: any) => {
    let index = details.findIndex((i) => i.id === id);
    let temp = details.filter((item) => item.id !== id);
    // console.log(temp, "filtered");
    setDetails(temp);
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <Sidebar />
      <div className="lg:w-[1190px] w-full">
        <Button
          text="Create Contact"
          onClick={() => {
            navigate("/contacts/create");
          }}
        />

        <p className="text-center text-primary text-lg mt-5 tracking-widest">
          All Contacts
        </p>

        <div className="flex flex-col justify-center items-center lg:m-0 m-5">
          {details.length > 0 ? (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 ">
              {details.map((item: any) => (
                <Card
                  details={item}
                  key={nanoid()}
                  deleteContact={() => deleteContact(item?.id)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-primary p-5 rounded flex items-center gap-5">
              <img
                className="w-[56px] h-[56px]"
                src={notfound}
                alt={notfound}
              />
              <p className="text-start text-primary font-medium">
                No contacts found!
                <br />
                Please add contact from <br /> Create Contact Button
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
