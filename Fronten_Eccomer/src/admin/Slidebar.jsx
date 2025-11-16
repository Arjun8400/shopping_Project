import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { FcContacts } from "react-icons/fc";
import { GiExitDoor } from "react-icons/gi";
import {toast} from "react-hot-toast";

const Slidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); 
    toast.success("Logged out successfully"); 
    setInterval(() => {
      navigate("/admin");
    }, 800);
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-8">Abmin Panel</h2>
      <nav className="space-y-2.5">
        <Link to={"/admin/dashboard"} className="block hover:text-green-600">
          Dashboard <MdDashboardCustomize className="inline text-blue-500" />
        </Link>
        <Link
          to={"/admin/adminproducts"}
          className="block hover:text-green-600"
        >
          Manege Products
          <MdProductionQuantityLimits className="inline text-yellow-400 space-x-2" />
        </Link>
        <Link to={"/admin/adminquary"} className="block hover:text-green-600">
          Manage Quary <FcContacts className="inline" />
        </Link>
        <Link onClick={handleLogout} className="block hover:text-green-600">
          Exit The Store <GiExitDoor className="inline  text-red-600" />
        </Link>
      </nav>
    </div>
  );
};

export default Slidebar;
