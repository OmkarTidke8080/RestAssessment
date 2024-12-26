import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Options() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center mt-20 gap-x-20">
        <div className="flex justify-center items-center w-44 h-20 border-2 border-black hover:bg-black hover:text-white cursor-pointer">
          <button
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Register
          </button>
        </div>
        <div className="flex justify-center items-center w-44 h-20 border-2 border-black hover:bg-black hover:text-white cursor-pointer">
          <button
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Sign In
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default Options;
