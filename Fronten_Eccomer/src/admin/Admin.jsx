import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    const err = {};
    if (!userId) err.userId = "User ID is required";
    if (!password) err.password = "Password is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // -------------------------
  // 👉 LOGIN API CALL
  // -------------------------
  const handleLogin = async () => {
    try {
      const res = await fetch(`/api/adminlogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userId, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        toast.success("Login Successful");
        navigate("/admin/dashboard");
      } else {
        toast.error(data);
        // navigate("/admin")
      }
    } catch (error) {
      toast.error(error || "An error occurred");
    }
  };

  // -------------------------
  // 👉 FORM SUBMIT HANDLER
  // -------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (!validate()) return;
    handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* USER ID */}
          <div>
            <label
              htmlFor="userId"
              className="block text-sm font-medium text-gray-700"
            >
              User ID
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter user id"
            />
            {errors.userId && (
              <p className="mt-1 text-sm text-red-600">{errors.userId}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign in
          </button>

          {message && (
            <div className="text-center text-sm text-green-600">{message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Admin;
