import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const SearchData = ({ onClose }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchResult);

  //Debounce

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim()) {
        fetch(`/api/search?q=${search}`)
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            setSearchResult(result.data);
          })
          .catch((err) => {
            toast.error(err);
          });
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <div className="fixed inset-0 bg-white z-[999] p-4 overflow-y-auto ">
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search here...."
          autoFocus
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-none"
        />
        <button
          className="ml-3 text-gray-700 hover:text-red-600 text-xl"
          onClick={() => {
            onClose(false);
          }}
        >
          <FaTimesCircle />
        </button>
      </div>
      <div className="flex items-center justify-center gap-4">
        {
        searchResult.length >0 ?
        searchResult.map((items, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-sm rounded-lg p-4 hover:shadow-xl"
          >
            <img
              src={`/uploads/${items.productImage}`}
              alt=""
              className="w-full h-32 object-contain rounded "
            />
            <h3 className="mt-2 font-medium text-gray-800">
              {items.productName}
            </h3>
            <p className="mt-1 font-normal text-gray-500 capitalize">
              {items.productCategory}
            </p>
            <p className="text-green-700 font-bold">{items.productPrice} ₹</p>
            <button className="w-full bg-purple-500 text-white mt-2 py-1 rounded hover:bg-purple-800 cursor-pointer">
              Add To Cart
            </button>
          </div>
        )): <p className="text-center text-red-600 capitalize text-xl font-semibold">No result found...</p>
    }
      </div>
    </div>
  );
};

export default SearchData;
