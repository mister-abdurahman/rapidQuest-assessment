import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegListAlt, FaRegUser, FaSearch } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { NavLink, useMatch } from "react-router-dom";

export const MobileBottomBar = () => {
  const homePath = useMatch("/");
  const incomePath = useMatch("/income");
  const comparePath = useMatch("/compare");
  return (
    <div className="mt-auto flex justify-between items-center gap-3">
      <span>
        <NavLink to={"/"}>
          <BsHouseDoor
            className={`${
              homePath
                ? "w-9 h-9 fill-white bg-violet-700 shadow-xl rounded-md p-2"
                : "w-6 h-6 fill-gray-500"
            }`}
          />
        </NavLink>
      </span>
      <span>
        <NavLink to={"/income"}>
          <IoIosCash
            className={`${
              incomePath
                ? "w-9 h-9 fill-white bg-violet-700 shadow-xl rounded-md p-2"
                : "w-6 h-6 fill-gray-500"
            }`}
          />
        </NavLink>
      </span>
      <span>
        <NavLink to={"/compare"}>
          <FaRegListAlt
            className={`${
              comparePath
                ? "w-9 h-9 fill-white bg-violet-700 shadow-xl rounded-md p-2"
                : "w-5 h-5 fill-gray-500"
            }`}
          />
        </NavLink>
      </span>
      <span>
        <FaRegUser className="w-5 h-5 fill-gray-500" />
      </span>
      <span>
        <FaSearch className="fill-gray-400" />
      </span>
    </div>
  );
};
