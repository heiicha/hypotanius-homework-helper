import React from "react";
import companyLogo from "../../assets/logo.png";

export default function Success() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <img
          src={companyLogo}
          className="logo"
          alt="Company Logo"
          style={{
            animation: "slideIn 0.5s ease-out",
            marginBottom: "20px",
          }}
        />
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "black",
          }}
        >
          Form Submission Successful!
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#555",
            marginBottom: "20px",
            lineHeight: "1.6", // Improve readability
          }}
        >
          Your fund information has been successfully submitted and is now under
          review. You can check the status of your fund on the dashboard. If you
          have any questions, feel free to contact our support team. Thank you
          for your submission!
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            style={{
              padding: "10px 20px",
              border: "1px solid black",
              borderRadius: "4px",
              backgroundColor: "white",
              cursor: "pointer",
              fontWeight: "bold",
              color: "black",
            }}
            onClick={() => (window.location.href = "/dashboard")}
          >
            Back to Home
          </button>
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => (window.location.href = "/create")}
          >
            Add Another Fund
          </button>
        </div>
      </div>
    </div>
  );
}
