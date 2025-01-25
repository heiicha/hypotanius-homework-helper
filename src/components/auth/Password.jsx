import React, { useState } from "react";
import { supabase } from "../../App";

export default function Password() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    const user = supabase.auth.user();
    const { error: signInError } = await supabase.auth.signIn({
      email: user.email,
      password: oldPassword,
    });

    if (signInError) {
      setError("Old password is incorrect.");
      return;
    }

    const { error: updateError } = await supabase.auth.update({
      password: newPassword,
    });

    if (updateError) {
      console.error("Error updating password:", updateError.message);
      setError("Error updating password");
    } else {
      console.log("Password updated successfully");
      alert("Password updated successfully");
      setError("");
    }
  };

  const inputStyle = {
    width: "50%",
    padding: "16px 20px",
    fontSize: "16px",
    border: "2px solid #eef2f7",
    borderRadius: "16px",
    transition: "all 0.4s ease",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
    color: "#000000",
    textAlign: "left",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    color: "#000000",
    textAlign: "left",
  };

  const formStyle = {
    margin: "0 auto",
    textAlign: "left",
    color: "#000000",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {error && (
        <div
          style={{
            color: "#dc2626",
            backgroundColor: "#fee2e2",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}
      <div style={{ marginBottom: "1rem" }}>
        <label style={labelStyle}>Old Password:</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={labelStyle}>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={labelStyle}>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#000000",
          color: "white",
          border: "none",
          borderRadius: 7,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Change Password
      </button>
    </form>
  );
}
