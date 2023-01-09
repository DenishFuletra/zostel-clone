import { Route, Routes } from "react-router-dom";
import Destinations from "../Destinations/Destinations";
import Home from "../Home/Home";

import React from "react";
import Cart from "../Cart/Cart";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/destinations" element={<Destinations />}></Route>
      <Route path="/bookroom" element={<Cart />}></Route>
    </Routes>
  );
}
