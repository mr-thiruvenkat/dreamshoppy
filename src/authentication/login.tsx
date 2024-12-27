import React from "react";
import Constants from "../constants/Constants.ts";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUserNameChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const onPressLogin = async () => {
    if (userName.length > 0 && password.length > 0) {
      try {
        // let url = `${Constants.BASE_URL}${Constants.loginUser}?email=${userName}&password=${password}`;
        // const response = await axios.get(url);
        // console.log(response);
        window.location.href = "/home";
      } catch (error) {
        console.log(error);
      }
    }
  };

  function createAccount() {
    console.log("New user @@@@");
    window.location.href = "/newuser";
  }

  function forgotPassword() {
    console.log("Forgot password @@@@");
    // window.location.href = "/forgotpassword";
  }

  return (
    <div
      className="bg-gradient-to-r from-red-300 to-blue-200 flex items-center bg-red-100 justify-center min-h-screen"
      style={{}}
    >
      <div className="bg-white p-8 px-14 rounded">
        <div className="justify-items-center rounded">
          <img
            src={require("../images/woman.png")}
            alt="Logo"
            className="w-40 h-40"
          />
        </div>
        <div className="items-center mt-10">
          <h1 className="text-l self-center items-center">Email or username</h1>
          <div className="py-2">
            <input
              type="email"
              className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
              placeholder="Enter email or username"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center align-middle">
            <h1 className="text-l">Password</h1>
          </div>
          <div className="py-2">
            <input
              type="password"
              className="w-96 px-2 h-11 border-2 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 border-gray-200 rounded"
              placeholder="Enter secret password"
              value={password}
              onChange={handlePasswordChange}
            />
            <h1
              className="text-blue-500 text-sm mt-1"
              onClick={() => {
                forgotPassword();
              }}
            >
              forgot password?
            </h1>
          </div>
        </div>
        <div className="py-4 mt-2 justify-self-center">
          <button
            type="button"
            onClick={() => {
              onPressLogin();
            }}
            className="bg-red-400 justify-self-center rounded h-10 w-32 text-sm text-white"
          >
            Login
          </button>
        </div>
        <div className="justify-items-center w-96 mt-2">
          <h1 className="text-sm justify-items-center w-96">
            Don't have an account?
            <h1
              className="text-blue-500 text-l mt-2"
              onClick={() => {
                createAccount();
              }}
            >
              Create Account
            </h1>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
