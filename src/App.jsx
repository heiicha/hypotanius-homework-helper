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
import { createClient } from "@supabase/supabase-js";
import Forgot from "./components/auth/Forgot";

const supabase = createClient(
  "https://dzkrxhjgneqqvylereku.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6a3J4aGpnbmVxcXZ5bGVyZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTIzNDcsImV4cCI6MjA1MjI2ODM0N30.94q-TVZxU6jDPRDQStAMQhBrbCRrlOprEw-k3MI51_I"
);

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
