import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
    otp: "",
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
        "http://localhost:3000/api/verifyOtp",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Signed In successfully");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8">Verify OTP</h1>

      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-96">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="Email"
              className="block text-gray-400 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={data.Email}
              onChange={handleInputChange}
              name="Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* OTP Input */}
          <div>
            <label
              htmlFor="otp"
              className="block text-gray-400 font-medium mb-2"
            >
              Enter OTP
            </label>
            <input
              type="number"
              placeholder="Enter the OTP"
              value={data.otp}
              onChange={handleInputChange}
              name="otp"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700 transition-all"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyOtp;
