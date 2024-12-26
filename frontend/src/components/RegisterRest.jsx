import React from 'react'
import { useState } from 'react';
function RegisterRest() {

    const [data, setData] = useState({
      NameOfBusiness: "",
      OwnerName: "",
      MobileNumber: "",
      WhatsAppMobile: "",
      Email: "",
    //   GST: "",
      Address: "",
    //   DateOfJoining: "",
    //   DateOfExpiry: "",
    //   Password: "",
    //   NumberOfBranches: "",
    //   NumberOfActiveBranches: "",
    //   NumberOfInActiveBranches: "",
    //   SubscriptionPlan: "",
    });
    return (
      <>
        <div className="w-full max-w-xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="w-full lg:w-1/2">
                <label
                  className="block font-rockoFLFRegular  text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="Name"
                  type="text"
                  value={data.Name}
                  onChange={handleInputChange}
                  name="Name"
                  className="bg-inherit text-white border-b-2 border-white w-full focus:outline-none py-2 px-3"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  className="block font-rockoFLFRegular  text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="Email"
                  type="email"
                  value={data.Email}
                  onChange={handleInputChange}
                  name="Email"
                  className="bg-inherit text-white border-b-2 border-white w-full focus:outline-none py-2 px-3"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="w-full lg:w-1/2">
                <label
                  className="block font-rockoFLFRegular  text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Mobile Number
                </label>
                <input
                  id="Phone"
                  type="text"
                  value={data.MobileNumber}
                  onChange={handleInputChange}
                  name="Phone"
                  className="bg-inherit text-white border-b-2 border-white w-full focus:outline-none py-2 px-3"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  className="block  font-rockoFLFRegular text-sm font-medium mb-2"
                  htmlFor="company"
                >
                  WhatsApp Mobile Number
                </label>
                <input
                  id="Company"
                  type="text"
                  value={data.WhatsAppMobile}
                  onChange={handleInputChange}
                  name="Company"
                  className="bg-inherit text-white border-b-2 border-white w-full focus:outline-none py-2 px-3"
                />
              </div>
            </div>

            <div className="w-full mb-6">
              <label
                className="block font-rockoFLFRegular  text-sm font-medium mb-2"
                htmlFor="message"
              >
                Address
              </label>
              <textarea
                id="Message"
                name="Message"
                value={data.Address}
                onChange={handleInputChange}
                className="bg-inherit text-white border-b-2 border-white w-full focus:outline-none py-2 px-3"
                rows="4"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white font-rockoFLFRegular cursor-none text-black py-2 px-6 rounded-full hover:bg-gray-300 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
}

export default RegisterRest
