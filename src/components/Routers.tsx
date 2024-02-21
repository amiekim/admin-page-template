import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "../pages/login";
import Dashboard from "../pages/dashboard";
import SecurityPage from "../pages/security";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
