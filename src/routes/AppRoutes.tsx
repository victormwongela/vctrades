import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Plans from "../pages/public/Plans";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Trade from "../pages/public/Trade";
import TradeSelection from "../pages/public/TradingSelection";
import TradeTerminal from "../components/trading/TradeTerminal";
import Dashboard from "../pages/trading/Dashboard";
import Bots from "../pages/trading/Bots";
import CopyTrading from "../pages/trading/CopyTrading";


const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />
      <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
<Route
  path="/trade-selection"
  element={<TradeSelection />}
/>

<Route
  path="/trade/demo"
  element={<TradeTerminal />}
/>

<Route
  path="/trade/real"
  element={<TradeTerminal />}
/>

<Route
  path="/reset-password"
  element={<ResetPassword />}
/>
<Route
  path="/trade"
  element={<Trade />}
/>
<Route
  path="/bots"
  element={<Bots />}
/>

<Route
  path="/copy-trading"
  element={<CopyTrading />}
/>

<Route
  path="/dashboard"
  element={<Dashboard />}
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