import React, { useState, useEffect } from "react";
import companyLogo from "../../assets/logo.png";
import { supabase } from "../../App";

export default function Verification() {
  const [resendStatus, setResendStatus] = useState(null);

  const handleResendEmail = async () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "40px",
          // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <img
          src={companyLogo}
          className="logo"
          alt="Company Logo"
          style={{
            animation: "slideIn 0.5s ease-out",
          }}
        />
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Please verify your email
        </h1>
        <p style={{ fontSize: "16px", color: "#222222" }}>
          You're almost there! We have sent a verification link to your email.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#222" }}>
          Just click on the link in your email to complete your sign up. If you
          don't see it, you may need to{" "}
          <span style={{ fontWeight: "bold" }}>check your spam</span> folder
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#222" }}>
          Still can't find an email? No problem
        </p>
        <button
          onClick={handleResendEmail}
          style={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            border: "1px solid #E0E0E0",
            borderRadius: "4px",
            padding: "15px 25px",
            fontSize: "14px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  );
}
