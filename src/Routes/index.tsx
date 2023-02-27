import { Navigate, Route, Routes } from "react-router";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Navigate replace to={"Login"} />} />
    </Routes>
  );
};
