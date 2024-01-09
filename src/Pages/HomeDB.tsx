import { FaSearch } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import { IoIosCash } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { FaSortDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import prof_image from "../assets/profile-image.jpg";
import logo from "../assets/logo-image.png";
import brImage from "../assets/br-image.png";
import { SimpleBarChart } from "../components/SimpleBarChart";
import { ProgressBar } from "../components/ProgressBar";
import { MobileBottomBar } from "../UI/MobileBottomBar";
import { NavLink } from "react-router-dom";

export const HomeDB = () => {
  return (
    <div className="sm:bg-stone-50 bg-white xl:h-screen sm:h-auto h-screen  p-6 font-sans">
      {/* desktop card */}
      <div className="hidden bg-white rounded-xl sm:flex h-full relative">
        {/* sidebar */}
        <div className="basis-12 flex flex-col items-center gap-14">
          <div className="flex flex-col gap-4 items-center">
            <figure className="w-12 h-12">
              <img src={logo} alt="Profile Image" className="w-full h-full" />
            </figure>
            <span>
              <FaSearch className="fill-gray-400" />
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span>
              <BsHouseDoor className="w-8 h-8 fill-white bg-violet-700 shadow-xl rounded-md p-2" />
            </span>
            <span>
              <IoIosCash className="w-5 h-5 fill-gray-500" />
            </span>
            <span>
              <FaRegListAlt className="w-5 h-5 fill-gray-500" />
            </span>
            <span>
              <FaRegUser className="w-5 h-5 fill-gray-500" />
            </span>
          </div>
          <div className="mt-auto py-6 flex flex-col items-center gap-4">
            <span className="relative">
              <span className="absolute top-0 right-0 w-[.3rem] h-[.3rem] rounded-full bg-teal-400"></span>
              <IoMdNotificationsOutline className="fill-gray-400 w-6 h-6" />
            </span>
            <span>
              <RxExit className="text-gray-400 w-5 h-5" />
            </span>
          </div>
        </div>
        {/* rest after sidebar */}
        <div className="grow flex xl:flex-nowrap flex-wrap">
          <div className="bg-stone-50 lg:basis-1/4 basis-full px-8 py-10 flex lg:flex-col flex-row flex-wrap">
            <div className="lg:basis-auto basis-full flex items-center gap-2">
              <figure className="w-16 h-16 rounded-full shadow-xl">
                <img
                  src={prof_image}
                  alt="Profile Image"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </figure>
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Hi Mike,</h1>
                <p className="text-sm text-gray-600">welcome back</p>
              </div>
            </div>

            <div className="mt-9 flex lg:flex-col flex-row lg:basis-0 basis-full gap-2 lg:justify-normal justify-between">
              <h5 className="font-semibold">Today</h5>
              <div>
                <h1 className="font-extrabold text-3xl">$19,892</h1>
                <p className="text-gray-500 text-xs">Account Balance</p>
              </div>
              <div>
                <h4 className="font-bold">$4,000</h4>
                <p className="text-gray-500 text-xs">
                  Year-to-date contributions
                </p>
              </div>
              <div>
                <h4 className="font-bold">$1,892</h4>
                <p className="text-gray-500 text-xs">Total Interest</p>
              </div>
              <button className="bg-blue-600 text-sm text-white w-fit mt-2 px-4 py-2 rounded-md flex items-center gap-2">
                I want to{" "}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </button>
            </div>

            <div className="mt-6">
              <h5 className="font-extrabold">Recent Transactions</h5>

              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-gray-500 text-xs">2020-06-07</p>
                  <h5 className="text-xs font-bold">
                    Withdrawal Transfer to Bank-XXX11
                  </h5>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">2020-07-21</p>
                  <h5 className="text-xs font-bold">
                    Withdrawal Transfer to Bank-XXX11
                  </h5>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">2020-07-18</p>
                  <h5 className="text-xs font-bold">
                    Withdrawal Transfer to Bank-XXX11
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:basis-1/2 md:basis-3/4 flex flex-col gap-5 px-16 py-10">
            <div>
              <h6 className="text-blue-700 font-semibold text-xs">
                Retirement Income
              </h6>
              <h1 className="font-extrabold text-xl">Starting Year 2056</h1>
            </div>

            <div className="flex gap-8">
              <div className="basis-1/3 pb-2 border-b-2 border-teal-600">
                <h1 className="font-extrabold text-xl">$3000,000</h1>
                <p className="text-gray-500 text-xs">My Goal</p>
              </div>
              <div className="basis-1/3 pb-2 border-b-2 border-teal-600">
                <h1 className="font-extrabold text-xl">59%</h1>
                <p className="text-gray-500 text-xs">Goal Achieved</p>
              </div>
              <div className="basis-1/3 pb-2 border-b-2 border-teal-600">
                <h1 className="font-extrabold text-xl">$300</h1>
                <p className="text-gray-500 text-xs">Est. Monthly Income</p>
              </div>
            </div>

            <div>
              <h2 className="font-extrabold">Contributions Overtime</h2>
              <div className="flex justify-between my-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-blue-900 w-3 h-2 rounded-lg"></span>
                  <p className="text-xs text-gray-400">Employer:</p>
                  <h6 className="font-bold text-xs">K 73,500</h6>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="bg-blue-700 w-3 h-2 rounded-lg"></span>
                  <p className="text-xs text-gray-400">Employee:</p>
                  <h6 className="font-bold text-xs">K 52,500</h6>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="bg-blue-300 w-3 h-2 rounded-lg"></span>
                  <p className="text-xs text-gray-400">Total Interest:</p>
                  <h6 className="font-bold text-xs">K 244,313</h6>
                </div>
              </div>
              {/* Graph */}
              <div className="w-full h-52">
                <SimpleBarChart />
              </div>
            </div>

            <div>
              <h1 className="font-bold">How do i compare to my peers?</h1>
              <p className="text-xs text-gray-400">
                These numbers represent current goal achievements
              </p>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3 mt-3">
                  <p className="font-bold text-[.7rem] flex gap-1">
                    Age: <span className="text-gray-500 ml-1">Under 30</span>{" "}
                    <span>
                      <FaSortDown />
                    </span>
                  </p>
                  <p className="font-bold text-[.7rem] flex gap-1">
                    Salary:{" "}
                    <span className="text-gray-500 ml-1">K20 - K30</span>{" "}
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
                <div className="flex gap-3">
                  <ProgressBar percent="78" name="Average" />
                  <ProgressBar percent="95" name="Top" />
                  <ProgressBar percent="59" name="Me" />
                </div>
              </div>
            </div>
          </div>

          <div className="xl:basis-1/4 lg: basis-full px-16 py-10 flex lg:flex-row xl:flex-col">
            <div className="bg-stone-50 rounded-md p-4">
              <h1 className="font-bold">Retirement Strategy</h1>

              <div className="mt-3">
                <p className="text-xs font-semibold">Employee Contribution</p>
                <div className="flex items-center gap-3 mt-1">
                  <input
                    onChange={(e) => e.target.value}
                    type="range"
                    min={1}
                    max={20}
                    value={6}
                  />
                  <span className="text-xs bg-white font-extrabold p-1 rounded-md">
                    12%
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs font-semibold">Retirement Age</p>
                <div className="flex items-center gap-3 mt-1">
                  <input
                    onChange={(e) => e.target.value}
                    type="range"
                    min={1}
                    max={20}
                    value={16}
                  />
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
            rounded-md text-xs w-full py-2 text-gray-100"
              >
                Update
              </button>

              <p className="flex items-center gap-1 justify-center mt-2 text-xs text-blue-600 font-semibold">
                View Help Docs <FaAngleRight />
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-3 mt-6">
              <h1 className="xl:w-4/5 lg:w-full text-sm">
                Are you considering a{" "}
                <span className="font-extrabold capitalize">
                  housing advance?
                </span>
              </h1>
              <p className="text-xs text-gray-400">
                Limited time reduced interest
              </p>
              <p className="flex items-center gap-1 mt-2 text-xs text-blue-600 font-semibold">
                Learn more <FaAngleRight />
              </p>
            </div>
          </div>
        </div>

        <figure className="absolute w-36 h-12 bottom-12 right-0">
          <img src={brImage} alt="bottom right image" />
        </figure>
      </div>

      {/* mobile view */}
      <div className="sm:hidden flex flex-col px-3 h-full relative">
        <div className="absolute top-2 right-2">
          <span className="relative">
            <span className="absolute top-0 right-0 w-[.3rem] h-[.3rem] rounded-full bg-teal-400"></span>
            <IoMdNotificationsOutline className="fill-gray-400 w-6 h-6" />
          </span>
        </div>
        <div className="flex items-center gap-2 mt-12">
          <figure className="w-16 h-16 rounded-full shadow-xl">
            <img
              src={prof_image}
              alt="Profile Image"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </figure>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Hi Mike,</h1>
            <p className="text-sm text-gray-600">welcome back</p>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 bg-stone-50 rounded-lg px-4 py-5">
          <h5 className="font-semibold">Today</h5>
          <div>
            <h1 className="font-extrabold text-4xl">$19,892</h1>
            <p className="text-gray-500 text-xs">Account Balance</p>
          </div>
          <div className="flex gap-8 items-center my-3">
            <div>
              <h4 className="font-bold">$4,000</h4>
              <p className="text-gray-500 text-xs">Year-to-date</p>
            </div>
            <div>
              <h4 className="font-bold">$1,892</h4>
              <p className="text-gray-500 text-xs">Total Interest</p>
            </div>
          </div>
          <button className="bg-blue-600 text-sm text-white w-full mt-2 px-4 py-3 rounded-md flex items-center justify-center gap-2">
            <NavLink to={"/income"}>I want to...</NavLink>
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-2 bg-stone-50 rounded-lg px-4 py-5">
          <h5 className="font-extrabold">Recent Transactions</h5>

          <div>
            <p className="text-gray-500 text-sm">2020-06-07</p>
            <h5 className="text-sm font-bold">
              Withdrawal Transfer to Bank-XXX11
            </h5>
          </div>
        </div>

        <MobileBottomBar />
      </div>
    </div>
  );
};
