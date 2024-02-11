import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/Home";
import ProfilePage from "../pages/Profile/profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
