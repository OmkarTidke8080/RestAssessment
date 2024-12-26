import React from "react";

function Options() {
  return (
    <>
      <div className="flex justify-center mt-20 gap-x-20">
        <div className="flex justify-center items-center w-44 h-20 border-2 border-black hover:bg-black hover:text-white cursor-pointer">
          Register
        </div>
        <div className="flex justify-center items-center w-44 h-20 border-2 border-black hover:bg-black hover:text-white cursor-pointer">
          Sign In
        </div>
      </div>
    </>
  );
}

export default Options;
