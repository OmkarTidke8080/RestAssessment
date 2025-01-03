import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterRest() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    NameOfBusiness: "",
    OwnerName: "",
    MobileNumber: "",
    WhatsAppMobile: "",
    Email: "",
    GST: "",
    Address: "",
    Rest_Images: [],
    DateOfJoining: "",
    DateOfExpiry: "",
    Password: "",
    NumberOfBranches: "",
    NumberOfActiveBranches: "",
    Status: "",
    SubscriptionPlan: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setData((prevData) => ({
        ...prevData,
        Rest_Images: files ? Array.from(files) : [],
      }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!Array.isArray(data.Rest_Images)) {
      alert("Please upload valid images.");
      return;
    }

    const formData = new FormData();
    data.Rest_Images.forEach((image) => {
      formData.append("Rest_Images", image);
    });
    formData.append("NameOfBusiness", data.NameOfBusiness);

    formData.append("OwnerName", data.OwnerName);

    formData.append("MobileNumber", data.MobileNumber);

    formData.append("WhatsAppMobile", data.WhatsAppMobile);

    formData.append("Email", data.Email);

    formData.append("GST", data.GST);

    formData.append("Address", data.Address);

    formData.append("DateOfJoining", data.DateOfJoining);

    formData.append("DateOfExpiry", data.DateOfExpiry);

    formData.append("Password", data.Password);
    formData.append("NumberOfBranches", data.NumberOfBranches);
    formData.append("NumberOfActiveBranches", data.NumberOfActiveBranches);
    formData.append("Status", data.Status);
    formData.append("SubscriptionPlan", data.SubscriptionPlan);


    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Registration successful");
        navigate("/home");
      }
    } catch (error) {
      alert("Error during signup");
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Sign Up</h1>

      <form className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="NameOfBusiness"
            >
              Name Of Business
            </label>
            <input
              id="NameOfBusiness"
              type="text"
              value={data.NameOfBusiness}
              onChange={handleInputChange}
              name="NameOfBusiness"
              placeholder="Enter business name"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="OwnerName"
            >
              Name Of Owner
            </label>
            <input
              id="OwnerName"
              type="text"
              value={data.OwnerName}
              onChange={handleInputChange}
              name="OwnerName"
              placeholder="Enter owner's name"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="Email">
              Email
            </label>
            <input
              id="Email"
              type="email"
              value={data.Email}
              onChange={handleInputChange}
              name="Email"
              placeholder="Enter email address"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="MobileNumber"
            >
              Mobile Number
            </label>
            <input
              id="MobileNumber"
              type="tel"
              value={data.MobileNumber}
              onChange={handleInputChange}
              name="MobileNumber"
              placeholder="Enter mobile number"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="WhatsAppMobile"
            >
              WhatsApp Mobile Number
            </label>
            <input
              id="WhatsAppMobile"
              type="tel"
              value={data.WhatsAppMobile}
              onChange={handleInputChange}
              name="WhatsAppMobile"
              placeholder="Enter WhatsApp number"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="GST">
              GST
            </label>
            <input
              id="GST"
              type="text"
              value={data.GST}
              onChange={handleInputChange}
              name="GST"
              placeholder="Enter GST number"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Project_Images"
            className="block text-lg font-semibold"
          >
            Restaurent Image
          </label>
          <input
            name="Project_Images"
            className="w-full p-3 mt-2 border-2 border-white bg-transparent text-white rounded-md file:border-2 file:border-white file:bg-transparent file:text-white file:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
            type="file"
            accept="image/*"
            multiple
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="Address">
            Address
          </label>
          <textarea
            id="Address"
            name="Address"
            value={data.Address}
            onChange={handleInputChange}
            placeholder="Enter full address"
            className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="DateOfJoining"
            >
              Date Of Joining
            </label>
            <input
              id="DateOfJoining"
              type="date"
              value={data.DateOfJoining}
              onChange={handleInputChange}
              name="DateOfJoining"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="DateOfExpiry"
            >
              Date Of Expiry
            </label>
            <input
              id="DateOfExpiry"
              type="date"
              value={data.DateOfExpiry}
              onChange={handleInputChange}
              name="DateOfExpiry"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="NumberOfBranches"
            >
              Number Of Branches
            </label>
            <input
              id="NumberOfBranches"
              type="number"
              value={data.NumberOfBranches}
              onChange={handleInputChange}
              name="NumberOfBranches"
              placeholder="Enter number of branches"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="NumberOfActiveBranches"
            >
              Number Of Active Branches
            </label>
            <input
              id="NumberOfActiveBranches"
              type="number"
              value={data.NumberOfActiveBranches}
              onChange={handleInputChange}
              name="NumberOfActiveBranches"
              placeholder="Enter active branches"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="NumberOfInActiveBranches"
            >
              Status
            </label>

            <select
              id="Status"
              value={data.Status}
              onChange={handleInputChange}
              name="Status"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="SubscriptionPlan"
          >
            Subscription Plan
          </label>
          <select
            id="SubscriptionPlan"
            value={data.SubscriptionPlan}
            onChange={handleInputChange}
            name="SubscriptionPlan"
            className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a plan</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="Password">
            Password
          </label>
          <input
            id="Password"
            type="password"
            value={data.Password}
            onChange={handleInputChange}
            name="Password"
            placeholder="Enter password"
            className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterRest;
