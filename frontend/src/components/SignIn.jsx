import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/signIn",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("OTP sent successfully");
        navigate("/verify-otp");
      }
    } catch (error) {
      alert(error);
      console.error("Error during signin:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="Email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={data.Email}
              onChange={handleInputChange}
              name="Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="Password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={data.Password}
              onChange={handleInputChange}
              name="Password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
