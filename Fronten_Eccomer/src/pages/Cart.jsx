import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-hot-toast'
import {
  cartTotal,
  DecrementQuantity,
  deleteCartItem,
  fetchCart,
  IncrementQuantity,
  saveCart,
} from "../features/Cart/cartSlice";

const Cart = () => {
  const navegate = useNavigate();
  const cartData = useSelector((state) => state.Cart.cart);
  const cartAllTotal = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    dispatch(cartTotal());
  }, [cartData, dispatch]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("user");

    if (token && userId && cartData.length > 0) {
      dispatch(
        saveCart({
          userId: userId,
          cartitems: cartData,
          totalPrice: cartAllTotal.TotalPrice,
          totalQuantity: cartAllTotal.TotalQuantity,
        })
      );
    }
  }, [cartData, cartAllTotal, dispatch]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("user");

    if (!token) {
      toast.error("Please login to access to cart");
      navegate("/login");
      return;
    }

    if (userId) {
      dispatch(fetchCart(userId));
      setCheckingAuth(false);
    } else {
      setCheckingAuth(false);
    }
  }, [dispatch, navegate]);

  if (checkingAuth) {
    return (
      <div className="fixed inset-0 justify-center items-center bg-black ">
        <div className="p-6 bg-white rounded-lg shadow-lg">loading cart...</div>
      </div>
    );
  }



  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex justify-center items-center z-50 ">
      {/* Cart start section */}
      <div className="bg-white w-full max-w-xl p-6 rounded-2xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => navegate("/")}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold"
        >
          <IoClose />
        </button>
        <h2 className="text-2xl font-bold text-purple-600 text-center mb-4">
          Your Cart 🛒
        </h2>
        {/* Cart Itams */}
        <ul className="divide-y divide-gray-300">
          {cartData.map((itam, index) => (
            <li key={index} className="flex items-center gap-5 py-4">
              <img
                src={`/uploads/${itam.productImage}`}
                alt=""
                className="w-14 h-10 rounded-sm object-cover border border-gray-300"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-700">
                  {itam.productName}
                </h3>
              </div>
              <p className="text-sm text-green-600 font-bold">
                ₹ {itam.productPrice}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-purple-500 hover:bg-purple-700 text-white rounded"
                  onClick={() => {
                    dispatch(DecrementQuantity(itam));
                  }}
                >
                  <FaMinus />
                </button>
                <button className="px-2">{itam.qunatity}</button>
                <button
                  className="px-2 py-1 bg-purple-500 hover:bg-purple-700 text-white rounded"
                  onClick={() => {
                    dispatch(IncrementQuantity(itam));
                  }}
                >
                  <FaPlus />
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => {
                    dispatch(deleteCartItem(itam));
                  }}
                  className="px-2 py-1 text-xl text-gray-700 hover:text-red-700  rounded"
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {/* Cart Itams Total */}
        <div className="mt-4 text-right">
          <p className="text-lg font-semibold text-gray-800">
            Total Quantity :
            <span className="text-gray-700 font-bold">
              {" "}
              {cartAllTotal.TotalQuantity}
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Total Price :
            <span className="text-green-700 font-bold">
              {" "}
              ₹ {cartAllTotal.TotalPrice}
            </span>
          </p>
          <Link to="/order">
            <button
              className="bg-purple-600 mt-4 w-full px-6 py-2 rounded text-white font-bold hover:bg-purple-900 cursor-pointer"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
