import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Contacts",
    link: "/contacts",
  },
  {
    id: 2,
    name: "Charts and Maps",
    link: "/",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="lg:w-[250px] bg-grayLight h-screen flex flex-col justify-center items-center gap-10">
      {menuItems.map((item: any) => (
        <Link key={item?.id} to={item?.link}>
          <p
            className={`lg:text-lg font-medium cursor-pointer uppercase tracking-widest w-[140px] ${
              pathname === item?.link ? "text-cyan" : ""
            }`}
          >
            {item?.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
