import React, { useState } from "react";
import Navbar from "../components/navbar.tsx";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Sowmiya K",
    email: "sowmi@gmail.com",
    phone: "1234567890",
    profilePicture: require("../images/woman.png"),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSaveChanges = () => {
    console.log("Saved user details:", user);
    window.location.href = "/home"
  };

  return (
    <div className="sticky bg-gradient-to-r from-red-300 to-blue-200 bg-red-100 min-h-screen items-center min-w-fit">
      <Navbar />
      <div className=" min-h-screen p-6 flex justify-center items-center rounded-3xl">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover mb-4"
            />
            <label
              htmlFor="profilePicture"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Change Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () =>
                    setUser({ ...user, profilePicture: reader.result });
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          {/* User Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex-1 justify-items-center mt-6 text-center">
            <button
              onClick={()=>{
                window.location.href = "/"
              }}
              className="bg-blue-500 hover:bg-white hover:text-red-500 text-white px-6 py-2 rounded shadow"
            >
              Logout
            </button>
            <button
              onClick={handleSaveChanges}
              className="bg-red-500 ml-8 hover:bg-white hover:text-red-500 text-white px-6 py-2 rounded shadow"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
