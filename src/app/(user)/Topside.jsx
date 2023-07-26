"use client";
import { useState } from "react";
import * as RiIcon from "react-icons/ri";
import Sidebar from "../Sidebar";

const Topside = ({ search, setSearch }) => {
  const [open, setOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(true);

  return (
    <div className="flex items-center pb-5 lg:w-full w-[90%] mx-auto gap-x-8">
      <form
        className={
          searchBar
            ? "w-[1%] relative transition-all duration-300"
            : "w-[70%] lg:w-[30%] md:w-[50%] relative transition-all duration-300"
        }
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-full text-gray-900 rounded-md shadow-md text-lg h-[45px] border-none outline-none focus:outline-indigo-600 dark:focus:outline-[#2eb573] pl-9 transition-all duration-300"
        />
        <span
          className="cursor-pointer absolute left-1 top-2 dark:text-[#2eb573] text-indigo-600 "
          onClick={() => setSearchBar(!searchBar)}
        >
          <RiIcon.RiSearch2Line size={26} />
        </span>
      </form>
      <div
        onClick={() => setOpen(!open)}
        className="px-5 ml-1 text-white font-semibold text-lg h-[45px] rounded-md shadow-md hover:bg-blue-600 cursor-pointer transition-all duration-300 flex items-center gap-x-2 bg-indigo-600"
      >
        Filter
        <RiIcon.RiFilter2Line size={25} />
      </div>
      {open && <Sidebar open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Topside;
