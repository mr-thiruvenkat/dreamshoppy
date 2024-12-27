import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/loading.tsx";
import Dashboard from "../dashboard/index.tsx";
import Login from "../authentication/login.tsx";
import Registration from "../authentication/newuser.tsx";
import Cart from "../orders/cart/index.tsx";
import OrderHistory from "../orders/history/index.tsx";
import Profile from "../profile/index.tsx";

const RouterPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/newuser" element={<Registration />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default RouterPages;
