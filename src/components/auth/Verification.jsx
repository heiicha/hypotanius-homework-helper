import React from "react";

export default function Verification() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "40px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
          Verification Required
        </h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          A verification link has been sent to your email address. Please check
          your inbox and click on the link to verify your email.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          You may close this page once the verification process is complete.
        </p>
      </div>
    </div>
  );
}
