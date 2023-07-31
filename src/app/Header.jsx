"use client";
import Link from "next/link";
import * as RiIcon from "react-icons/ri";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.product);

  return (
    <nav className="fixed top-0 left-0 w-full py-3 shadow-md bg-gray-300 z-50">
      <div className="max-w-7xl flex items-center justify-between md:px-0 px-4 mx-auto">
        <h3 className="m-0 font-semibold text-2xl text-indigo-700">FakeShop</h3>
        <div className="flex items-center gap-x-2">
          <Link
            href={"/"}
            className="bg-indigo-600 flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white  transition-all duration-300 hover:text-indigo-800"
          >
            <RiIcon.RiHomeLine size={25} />
          </Link>

          <Link
            href={"/cart"}
            className="bg-indigo-600 relative  flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white  transition-all duration-300 hover:text-indigo-800"
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
