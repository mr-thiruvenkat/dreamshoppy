import axios from "axios";
import React from "react";
import Constants from "../constants/Constants.ts";

const Registration = () => {
  const [data, setData] = React.useState({
    name: "",
    dob: "",
    mobile: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onCreateNewUser = async () => {
    try {
      let url = Constants.BASE_URL + Constants.createUser;
      const response = await axios.post(url, data);
      if (response.status === 201) {
        setTimeout(() => {
          window.location.href = "/signin";
        }, 2000);
      }
    } catch (error) {
      console.error(error.response?.data?.error || "Something went wrong!");
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-300 to-blue-200 flex items-center bg-red-100 justify-center min-h-screen">
      <div className="bg-white p-8 px-14 rounded">
        <div className="justify-items-center rounded">
          <img
            src={require("../images/woman.png")}
            alt="Logo"
            className="w-30 h-30"
          />
        </div>
        <div className="flex gap-10">
          <div className="items-center mt-10">
            <h1 className="text-l self-center items-center">Name</h1>
            <div className="py-2">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div className="items-center mt-10">
            <h1 className="text-l self-center items-center">Date of Birth</h1>
            <div className="py-2">
              <input
                type="text"
                name="dob"
                value={data.dob}
                onChange={handleChange}
                className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
                placeholder="Enter date of birth"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="items-center mt-10">
            <h1 className="text-l self-center items-center">Mobile no</h1>
            <div className="py-2">
              <input
                type="text"
                name="mobile"
                value={data.mobile}
                onChange={handleChange}
                className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="items-center mt-10">
            <h1 className="text-l self-center items-center">Gender</h1>
            <div className="py-2">
              <input
                type="text"
                name="gender"
                value={data.gender}
                onChange={handleChange}
                className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
                placeholder="Enter Gender"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="items-center mt-10">
            <h1 className="text-l self-center items-center">Email Id</h1>
            <div className="py-2">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
                placeholder="Enter Email ID"
              />
            </div>
          </div>
          <div className="items-center mt-10">
            <h1 className="text-l self-center items-center">Password</h1>
            <div className="py-2">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>
        <div className="py-4 mt-2 justify-self-center">
          <button
            type="button"
            onClick={onCreateNewUser}
            className="bg-red-400 justify-self-center rounded h-10 w-32 text-sm text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
