import React from "react";
import { FaSortDown } from "react-icons/fa";
import { ProgressBar } from "../components/ProgressBar";
import { GoX } from "react-icons/go";
import { NavLink } from "react-router-dom";

export const MobileCompare = () => {
  return (
    <div className="sm:hidden flex flex-col h-screen">
      <div className="absolute top-6 right-6">
        <span className="relative">
          <NavLink to={"/"}>
            <GoX className="fill-gray-400 w-6 h-6" />
          </NavLink>
        </span>
      </div>
      <div className="mt-14 px-6">
        <h1 className="font-bold">How do i compare to my peers?</h1>
        <p className="text-xs text-gray-400">
          These numbers represent current goal achievements
        </p>
      </div>

      <div className="px-6">
        <div className="flex flex-col gap-3 mt-3">
          <p className="font-bold text-[.7rem] flex gap-1">
            Age: <span className="text-gray-500 ml-1">Under 30</span>{" "}
            <span>
              <FaSortDown />
            </span>
          </p>
          <p className="font-bold text-[.7rem] flex gap-1">
            Salary: <span className="text-gray-500 ml-1">K20 - K30</span>{" "}
            <span>
              <FaSortDown />
            </span>
          </p>
          <p className="font-bold text-[.7rem] flex gap-1">
            Gender: <span className="text-gray-500 ml-1">Male</span>{" "}
            <span>
              <FaSortDown />
            </span>
          </p>
        </div>
        <div className="flex gap-3 justify-center my-8">
          <ProgressBar percent="78" name="Average" />
          <ProgressBar percent="95" name="Top" />
          <ProgressBar percent="59" name="Me" />
        </div>
      </div>

      <div className="bg-stone-50 p-4 mt-auto rounded-tr-3xl rounded-tl-3xl">
        <h1 className="font-bold">Retirement Strategy</h1>

        <div className="mt-3">
          <p className="text-xs font-semibold">Employee Contribution</p>
          <div className="flex items-center gap-3 mt-1">
            <input type="range" min={1} max={20} value={6} />
            <span className="text-xs bg-white font-extrabold p-1 rounded-md">
              12%
            </span>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-xs font-semibold">Retirement Age</p>
          <div className="flex items-center gap-3 mt-1">
            <input type="range" min={1} max={20} value={16} />
            <span className="text-xs bg-white font-extrabold py-1 px-2 rounded-md">
              85
            </span>
          </div>
        </div>

        <div className="text-xs mt-8 flex items-center justify-between">
          <p>Employer Contribution</p>
          <p>8.4%</p>
        </div>
        <div className="text-xs mt-3 flex items-center justify-between">
          <p>Interest Rate</p>
          <p>5%</p>
        </div>

        <button
          className="mt-7 bg-blue-600
            rounded-md text-xs w-full py-4 text-gray-100"
        >
          <NavLink to={"/"}>Update</NavLink>
        </button>
      </div>
    </div>
  );
};
