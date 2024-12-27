import React from "react";
import { useEffect } from "react";
import * as animationData from "../images/loadingjson.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    loadWebsite();
  }, []);

  function loadWebsite() {
    setTimeout(() => {
      window.location.href = "/signin";
    }, 2000);
  }

  return (
    <div className="bg-gradient-to-r from-red-300 to-blue-200 flex items-center bg-red-200 justify-center min-h-screen">
      
      <div className="justify-items-center">
        <img
          src={require("../images/load.png")}
          alt="Logo"
          className="animate-spin w-20 h-20"
        />
        <h1 className="text-2xl m-4 text-white font-bold">Loading</h1>
      </div>
    </div>
  );
};

export default Loading;
