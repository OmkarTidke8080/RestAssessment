import React from "react";
import { useNavigate } from "react-router-dom";

function Options() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col items-center gap-y-10">
        <div className="flex justify-center items-center w-48 h-16 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black cursor-pointer transition duration-300">
          <button
            onClick={() => {
              navigate("/sign-up");
            }}
            className="text-lg font-semibold"
          >
            Register
          </button>
        </div>
        <div className="flex justify-center items-center w-48 h-16 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black cursor-pointer transition duration-300">
          <button
            onClick={() => {
              navigate("/sign-in");
            }}
            className="text-lg font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Options;
