import React from "react";
import shoppingLogo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdAddCall } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import {
  FaSearch,
  FaHome,
  FaCartPlus,
  FaRegUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import SearchData from "./SearchData";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout SuccessFully");
    navigate("/");
  }

  return (
    <nav className="bg-gradient-to-r from-purple-100 via-white to-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img
                src={shoppingLogo}
                alt="shopping Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="flex-1 mx-4 ">
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="w-full bg-gray-200 rounded-full pl-4 pr-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 "
                placeholder="Search for any More Products..."
                onFocus={() => {
                  setShowSearch(true);
                }}
                readOnly
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
            </div>
          </div>
          <div>
            {/* Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to={"/"} className="text-gray-700 hover:text-purple-500">
                <FaHome className="text-xl" />
              </Link>
              <Link
                to={"/quary"}
                className="text-gray-700 hover:text-purple-500"
              >
                <MdAddCall className="text-xl" />
              </Link>
              <Link
                to={"/cart"}
                className="text-gray-700 hover:text-purple-500"
              >
                <FaCartPlus className="text-xl" />
              </Link>

              {!token ? (
                <Link
                  to={"/login"}
                  className="text-gray-700 hover:text-purple-500"
                >
                  <FaRegUserCircle className="text-xl" />
                </Link>
              ) : (
                <MdLogout
                  className="text-2xl font-bold text-red-500 hover:text-red-700 hover:cursor-pointer"
                  onClick={handleLogOut}
                />
              )}
            </div>

            {/* Toggle */}
            <div className="md:hidden">
              <button className="text-2xl text-purple-500" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile View */}
            {isOpen && (
              <div className="md:hidden px-4 bg-amber-100 pt-2 shadow-md pb-4 space-y-2 absolute right-0 top-18 w-full">
                <Link
                  to={"/"}
                  className="block text-gray-500 hover:text-purple-500"
                >
                  <FaHome className="text-xl inline" /> Home
                </Link>
                <Link
                  to={"/quary"}
                  className="block text-gray-500 hover:text-purple-500"
                >
                  <MdAddCall className="inline text-xl" /> Contact
                </Link>
                <Link
                  to={"/cart"}
                  className="block text-gray-500 hover:text-purple-500"
                >
                  <FaCartPlus className="text-xl inline" /> Cart
                </Link>
                {!token ? (
                  <Link
                    to={"/login"}
                    className="block text-gray-500 hover:text-purple-500"
                  >
                    <FaRegUserCircle className="text-xl inline" /> User
                  </Link>
                ) : (
                  <button className="block text-gray-500 hover:text-purple-500" onClick={handleLogOut}>
                    <MdLogout className="text-2xl font-bold text-red-500 hover:text-red-700 hover:cursor-pointer inline" />{" "}
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {showSearch && <SearchData onClose={setShowSearch} />}
    </nav>
  );
};

export default Navbar;
