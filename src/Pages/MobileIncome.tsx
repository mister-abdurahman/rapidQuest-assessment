import React from "react";
import {
  MobileSimpleBarChart,
  SimpleBarChart,
} from "../components/SimpleBarChart";
import { MobileBottomBar } from "../UI/MobileBottomBar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const MobileIncome = () => {
  return (
    <div className="flex flex-col px-7 pt-10 h-screen pb-3 relative">
      <div className="sm:hidden block absolute top-6 right-6">
        <span className="relative">
          <span className="absolute top-0 right-0 w-[.3rem] h-[.3rem] rounded-full bg-teal-400"></span>
          <IoMdNotificationsOutline className="fill-gray-400 w-6 h-6" />
        </span>
      </div>
      <div className="sm:hidden block">
        <h6 className="text-blue-700 font-semibold text-xs">
          Retirement Income
        </h6>
        <h1 className="font-extrabold text-xl">Starting Year 2056</h1>
      </div>

      <div className="sm:hidden flex flex-wrap justify-between gap-8 my-7">
        <div className="basis-full pb-2 border-b-2 border-teal-600">
          <h1 className="font-extrabold text-xl">$3000,000</h1>
          <p className="text-gray-500 text-xs">My Goal</p>
        </div>
        <div className="basis-2/5 pb-2 border-b-2 border-teal-600">
          <h1 className="font-extrabold text-xl">59%</h1>
          <p className="text-gray-500 text-xs">Goal Achieved</p>
        </div>
        <div className="basis-2/5 pb-2 border-b-2 border-teal-600">
          <h1 className="font-extrabold text-xl">K 300</h1>
          <p className="text-gray-500 text-xs">Est. Monthly Income</p>
        </div>
      </div>

      <div className="sm:hidden block">
        <h2 className="font-extrabold">Contributions Overtime</h2>
        <div className="flex justify-between my-2">
          <div className="flex flex-col gap-1 ">
            <span className="bg-blue-900 w-3 h-2 rounded-lg"></span>
            <p className="text-xs text-gray-400">Employer:</p>
            <h6 className="font-bold text-xs">$73,500</h6>
          </div>
          <div className="flex flex-col gap-1 ">
            <span className="bg-blue-700 w-3 h-2 rounded-lg"></span>
            <p className="text-xs text-gray-400">Employee:</p>
            <h6 className="font-bold text-xs">$52,500</h6>
          </div>
          <div className="flex flex-col gap-1 ">
            <span className="bg-blue-300 w-3 h-2 rounded-lg"></span>
            <p className="text-xs text-gray-400">Total Interest:</p>
            <h6 className="font-bold text-xs">$244,313</h6>
          </div>
        </div>
        {/* Graph */}
        <div className="w-full h-56 mt-4">
          <MobileSimpleBarChart />
        </div>
      </div>

      <div className="hidden sm:block mx-auto text-xl font-bold text-blue-600 underline mt-48">
        <NavLink to={"/"}>&larr; Go to Dashboard</NavLink>
      </div>

      <MobileBottomBar />
    </div>
  );
};
