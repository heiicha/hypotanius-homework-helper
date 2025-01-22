import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Investor from "./components/investor";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Verification from "./components/auth/Verification";
import Create from "./components/Create";
import Success from "./components/forms/Success";
import Manage from "./components/Manage";
import Forgot from "./components/auth/Forgot";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/create" element={<Create />} />
        <Route path="/form-success" element={<Success />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}
