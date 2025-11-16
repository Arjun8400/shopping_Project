import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartTotal } from "../features/Cart/cartSlice";
import {toast} from 'react-hot-toast'

const Order = () => {
  const dispatch = useDispatch();
  const { cart, TotalPrice, TotalQuantity } = useSelector(
    (state) => state.Cart
  );
  const cartAllTotal = useSelector((state) => state.Cart);
 
  useEffect(() => {
    // ensure totals are up to date
    dispatch(cartTotal());
  }, [cart, dispatch]);

  const [address, setAddress] = useState({
    fullName: "",
    line1: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (!address.fullName) err.fullName = "Full name is required";
    if (!address.line1) err.line1 = "Address line is required";
    if (!address.city) err.city = "City is required";
    if (!address.zip) err.zip = "ZIP/postal code is required";
    if (!address.phone) err.phone = "Phone is required";
    if (!address.email) err.email = "Email is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
  };

  
  // !Payment setup  1. Order create
    function handlePayment() {
      const amount = cartAllTotal.TotalPrice;
      const currency = "INR";
      const receipt = "receipt#1";

      fetch(`/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
          currency: currency,
          receipt: receipt,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((order) => {
          const options = {
            key: "rzp_test_RfS2tmb0XbYzyW", //! razorpay ke id pass
            amount: order.amount,
            currency: order.currency,
            name: "Gift Shop",
            discription: "tasting Mode ",
            order_id: order.id,

            haldler: function (response) {
              const token = localStorage.getItem("token");
              const userId = localStorage.getItem("user");

              // !Varify payment
              fetch(`/api/varify`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  amount,
                  userId,
                }),
              })
                .then((res) => {
                  return res.json();
                })
                .then((result) => {
                  if (result.ok) {
                    toast.success(result.message);
                  } else {
                    toast.error(result.message);
                  }
                });
            },
            prefill: {
              name: "Arjun Prajapati",
              email: "youji099@gmail.com",
              contact: 8400090983,
            },
          };

          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        });
    }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      <div className="md:flex md:items-start md:gap-8">
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-6 rounded shadow"
        >
          <h3 className="text-lg font-medium mb-4">Shipping Address</h3>

          <div className="mb-3">
            <input
              name="fullName"
              placeholder="Full name"
              value={address.fullName}
              onChange={handleAddressChange}
              className="w-full p-2 border rounded"
            />
            {errors.fullName && (
              <div className="text-red-600 text-sm mt-1">{errors.fullName}</div>
            )}
          </div>

          <div className="mb-3">
            <input
              name="line1"
              placeholder="Address line 1"
              value={address.line1}
              onChange={handleAddressChange}
              className="w-full p-2 border rounded"
            />
            {errors.line1 && (
              <div className="text-red-600 text-sm mt-1">{errors.line1}</div>
            )}
          </div>

          <div className="flex  gap-3 mb-3">
            <input
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="flex-1 p-2 border rounded"
            />
            <input
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleAddressChange}
              className="w-36 p-2 border rounded"
            />
            <input
              name="zip"
              placeholder="ZIP"
              value={address.zip}
              onChange={handleAddressChange}
              className="w-28 p-2 border rounded"
            />
          </div>
          {(errors.city || errors.zip) && (
            <div className="text-red-600 text-sm mb-2">
              {errors.city || errors.zip}
            </div>
          )}

          <div className="mb-3">
            <input
              name="phone"
              placeholder="Phone"
              value={address.phone}
              onChange={handleAddressChange}
              className="w-full p-2 border rounded"
            />
            {errors.phone && (
              <div className="text-red-600 text-sm mt-1">{errors.phone}</div>
            )}
          </div>

          <div className="mb-5">
            <input
              name="email"
              placeholder="Email"
              value={address.email}
              onChange={handleAddressChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <button
            type="submit"
            onClick={handlePayment}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Place order
          </button>
        </form>

        <aside className="w-full md:w-80 mt-6 md:mt-0">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium mb-3">Order Summary</h3>
            <div className="mb-2">
              <span className="font-medium">Items :</span>{" "}
              <span>{TotalQuantity}</span>
            </div>
            <div className="mb-3">
              <span className="font-medium ">Subtotal :</span>{" "}
              <span className="text-green-500 font-semibold">
                {" "}
                ₹ {Number(TotalPrice).toFixed(2)}
              </span>
            </div>

            <div>
              <h4 className="font-medium mb-2">Items</h4>
              <div className="max-h-60 overflow-auto space-y-3">
                {cart && cart.length ? (
                  cart.map((it) => (
                    <div
                      key={it._id}
                      className="flex justify-between items-start border-b pb-2"
                    >
                      <div>
                        <div className="text-sm font-medium">
                          {it.productName || it.name || "Product"}
                        </div>
                        <div className="text-xs text-gray-500">
                          Qty: {it.qunatity || it.quantity || 1}
                        </div>
                      </div>
                      <div className="text-sm">
                        {" "}
                        ₹{" "}
                        {(
                          parseFloat(it.productPrice || it.price || 0) *
                          (it.qunatity || it.quantity || 1)
                        ).toFixed(2)}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500">No items in cart</div>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Order;
