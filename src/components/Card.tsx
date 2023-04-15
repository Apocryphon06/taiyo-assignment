import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ details,deleteContact }: any) => {
  return (
    <div className="lg:w-[300px] w-[250px] border border-grayLight p-5 rounded shadow-md">
      <p className="text-base text-primary">
        {details.firstName} {details.lastName}
      </p>
      <div className="flex items-center justify-between gap-5 mt-5">
        <Link to="/contacts/edit" state={details} className="w-full">
          <Button text="edit" variant="edit" />
        </Link>
        <Button onClick={deleteContact} text="delete" variant="delete" />
      </div>
    </div>
  );
};

export default Card;
