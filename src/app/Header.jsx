"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as RiIcon from "react-icons/ri";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.product);
  const [dark, setDark] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark("dark");
    } else {
      setDark("light");
    }
  }, []);

  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);


  return (
    <nav className="fixed top-0 left-0 w-full py-3 shadow-md bg-gray-300 dark:bg-gray-950 z-50">
      <div className="max-w-7xl flex items-center justify-between md:px-0 px-4 mx-auto">
        <h3 className="m-0 font-semibold text-2xl text-indigo-700 dark:text-gray-300">
          FakeShop
        </h3>
        <div className="flex items-center gap-x-2">
          <Link
            href={"/"}
            className="bg-indigo-600 dark:bg-indigo-300 dark:text-indigo-600 flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white dark:hover:bg-indigo-700 dark:hover:text-indigo-100 transition-all duration-300 hover:text-indigo-800"
          >
            <RiIcon.RiHomeLine size={25} />
          </Link>
          {dark === "dark" ? (
            <div
              onClick={() => setDark("light")}
              className="bg-indigo-600 dark:bg-indigo-300 cursor-pointer dark:text-indigo-600 flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white dark:hover:bg-indigo-700 dark:hover:text-indigo-100 transition-all duration-300 hover:text-indigo-800"
            >
              <RiIcon.RiSunLine size={25} />
            </div>
          ) : (
            <div
              onClick={() => setDark("dark")}
              className="bg-indigo-600 dark:bg-indigo-300 cursor-pointer dark:text-indigo-600 flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white dark:hover:bg-indigo-700 dark:hover:text-indigo-100 transition-all duration-300 hover:text-indigo-800"
            >
              <RiIcon.RiMoonLine size={25} />
            </div>
          )}
          <Link
            href={"/cart"}
            className="bg-indigo-600 dark:bg-indigo-300 relative dark:text-indigo-600 flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white dark:hover:bg-indigo-700 dark:hover:text-indigo-100 transition-all duration-300 hover:text-indigo-800"
          >
            <RiIcon.RiShoppingCart2Fill size={25} />
            <span className="absolute text-sm -top-2 -right-2 rounded-full flex items-center justify-center w-6 h-6 bg-indigo-500 text-white ">
              {cartItems.length}
            </span>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
