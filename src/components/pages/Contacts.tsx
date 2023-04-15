import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Card from "../Card";
import Sidebar from "../Sidebar";
import notfound from "../assets/notFound.svg";
import { useSelector } from "react-redux";

const Contacts = () => {

  // data from redux store
  const contacts = useSelector((state: any) => state.contacts);

  // console.log(reduxData.items, "contactData from redux store");

  const navigate = useNavigate();
  

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
          {contacts?.items?.length > 0 ? (
            // render list if length is greater than 0
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 ">
              {contacts.items?.map((item: any) => (
                <Card
                  details={item}
                  key={item?.id}
                />
              ))}
            </div>
          ) : (
            // if no contacts are available
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
