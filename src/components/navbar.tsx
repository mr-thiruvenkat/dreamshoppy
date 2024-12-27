import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-300 py-2 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Application Name */}
        <div className="text-xl font-bold text-white">DreamShoppy.in</div>
        <div class="relative w-80">
          <input
            type="text"
            placeholder="Search..."
            class="w-96 pl-10 pr-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div class="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-7l4 4"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <div className="flex">
            <a
              href="/home"
              className="flex items-center px-4 py-2 text-white font-bold hover:bg-white hover:text-red-400 rounded"
            >
              <span className="material-icons">
                <HomeIcon className="h-6 w-6" />
              </span>
              <span className="ml-2">Home</span>
            </a>

            <a
              href="/orders"
              className="flex items-center px-4 py-2 ttext-white font-bold hover:bg-white hover:text-red-400 rounded"
            >
              <span className="material-icons">
                <ShoppingBagIcon className="h-6 w-6" />
              </span>
              <span className="ml-2">Orders</span>
            </a>
          </div>
          {/* Cart */}
          <div className="relative">
            <div className="flex items-center gap-6">
              <a
                href="/cart"
                className="flex items-center px-4 py-2 text-white font-bold hover:bg-white hover:text-red-400 rounded"
              >
                <span className="material-icons">
                  <ShoppingCartIcon className="h-6 w-6" />
                </span>
                <span className="ml-2">Cart</span>
              </a>
              <a
                href="/profile"
                className="flex items-center px-4 py-2 text-white font-bold hover:bg-blue-500 hover:text-white rounded"
              >
                <span className="material-icons">
                  <UserCircleIcon className="h-6 w-6" />
                </span>
                <span className="ml-2">Profile</span>
              </a>
              {/* <button
                className="rounded-lg mt-2 px-5 py-1 mb-2 bg-blue-500 text-xl text-white"
                onClick={() => {
                  window.location.href = "/signin";
                }}
              >
                Login
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
