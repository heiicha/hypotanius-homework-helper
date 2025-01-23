import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { supabase } from "../../App";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const { error } = await supabase.auth.api.resetPasswordForEmail(email);
      if (error) {
        console.error("Error:", error.message);
      } else {
        setIsSent(true);
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
    }
  };

  return (
    <>
      <img
        src={logo}
        onClick={() => navigate("/dashboard")}
        className="logo"
        alt="Company Logo"
        style={{
          animation: "slideIn 0.5s ease-out",
          cursor: "pointer",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            className="logo"
            alt="Company Logo"
            style={{
              animation: "slideIn 0.5s ease-out",
            }}
          />
          <h1
            style={{
              color: "#333",
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Reset Password
          </h1>
          <p
            style={{
              color: "#555",
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "16px",
              maxWidth: "400px",
            }}
          >
            Enter your email address below to receive a link to reset your
            password.
          </p>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "90%",
              padding: "16px 20px",
              fontSize: "16px",
              border: "2px solid #eef2f7",
              borderRadius: "16px",
              marginBottom: "20px",
              transition: "all 0.4s ease",
              outline: "none",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
              color: "#000000",
              "&:focus": {
                borderColor: "#000",
                boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)",
                transform: "translateY(-2px)",
              },
            }}
          />
          <button
            onClick={handleResetPassword}
            style={{
              width: "100%",
              padding: "14px 20px",
              backgroundColor: "#FFFFFF",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              color: "black",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007BFF")
            }
          >
            Send Reset Link
          </button>
          {isSent && (
            <p
              style={{
                color: "green",
                marginTop: "20px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              A password reset link has been sent to your email.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
