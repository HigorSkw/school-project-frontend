import { Navigate, Route, Routes } from "react-router";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import HomeTeachers from "../Pages/Home/teachers/";
import HomeStudents from "../Pages/Home/students";
import HomeSubjects from "../Pages/Home/subjects";
import HomeClubs from "../Pages/Home/clubs";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/home/teachers" element={<HomeTeachers />} />
      <Route path="/home/students" element={<HomeStudents />} />
      <Route path="/home/clubs" element={<HomeClubs />} />
      <Route path="/home/grades" element={<Home />} />
      <Route path="/home/subjects" element={<HomeSubjects />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Navigate replace to={"Login"} />} />
    </Routes>
  );
};
