import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [totalNumber, setTotalNumber] = useState("");
  const [active, setActive] = useState("");
  const [inActive, setInActive] = useState("");

  useEffect(() => {
    totalRestaurents();
    totalActiveRestaurents();
    totalInActiveRestaurents();
  }, []);

  const totalRestaurents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getTotalRestaurents",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setTotalNumber(data.totalRestaurents);
        setActive(data.active);
        setInActive(data.inActive);
      }
    } catch (error) {
      console.error("Error during signin:", error);
    }
  };
  const totalActiveRestaurents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getActiveRestaurents",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setActive(data.totalRestaurents); 
      }
    } catch (error) {
      console.error("Error fetching active restaurants:", error);
    }
  };


  const totalInActiveRestaurents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getInActiveRestaurents",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const data = response.data;

        setInActive(data.totalRestaurents);
      }
    } catch (error) {
      console.error("Error during signin:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-12">
        Hotel Management System
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Total Restaurants */}
        <div className="bg-gray-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 w-64">
          <h2 className="text-xl font-semibold text-center mb-4">
            Total Restaurants
          </h2>
          <p className="text-4xl font-bold text-center">{totalNumber || 0}</p>
        </div>

        {/* Active Restaurants */}
        <div className="bg-gray-700 text-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 w-64">
          <h2 className="text-xl font-semibold text-center mb-4">
            Active Restaurants
          </h2>
          <p className="text-4xl text-green-600 font-bold text-center">
            {active || 0}
          </p>
        </div>

        {/* Inactive Restaurants */}
        <div className="bg-gray-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 w-64">
          <h2 className="text-xl font-semibold text-center mb-4">
            Inactive Restaurants
          </h2>
          <p className="text-4xl text-red-600 font-bold text-center">
            {inActive || 0}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
