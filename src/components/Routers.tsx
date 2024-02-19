import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "../pages/login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<div>dashboaard</div>} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
