import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Plans from "../pages/public/Plans";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/plans"
        element={<Plans />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
};

export default AppRoutes;