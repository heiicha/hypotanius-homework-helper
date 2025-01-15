import React, { useState } from "react";
import "./Dashboard.css";
import companyLogo from "./../assets/logo.png";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://dzkrxhjgneqqvylereku.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6a3J4aGpnbmVxcXZ5bGVyZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTIzNDcsImV4cCI6MjA1MjI2ODM0N30.94q-TVZxU6jDPRDQStAMQhBrbCRrlOprEw-k3MI51_I"
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      console.log("Logged in:", data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f6f8fd 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #e8f0ff 0%, #f5f8ff 100%)",
          top: "-250px",
          right: "-250px",
          animation: "float 15s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #f0f5ff 0%, #ffffff 100%)",
          bottom: "-150px",
          left: "-150px",
          animation: "float 20s ease-in-out infinite reverse",
        }}
      />

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "48px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.06)",
          width: "100%",
          maxWidth: "420px",
          animation: "slideIn 0.6s ease-out",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src={companyLogo}
          alt="Company Logo"
          style={{
            width: "180px",
            marginBottom: "40px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            animation: "fadeInRotate 1s ease-out",
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
          }}
        />
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
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "28px", width: "100%" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              required
              disabled={loading}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: "90%",
                padding: "16px 20px",
                fontSize: "16px",
                border: "2px solid #eef2f7",
                borderRadius: "16px",
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
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              background: loading
                ? "#666666"
                : "linear-gradient(45deg, #000000, #333333)",
              color: "white",
              border: "none",
              borderRadius: "16px",
              fontSize: "17px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.4s ease",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              "&:hover": {
                transform: loading ? "none" : "translateY(-3px)",
                boxShadow: loading ? "none" : "0 8px 16px rgba(0, 0, 0, 0.2)",
                background: loading
                  ? "#666666"
                  : "linear-gradient(45deg, #1a1a1a, #404040)",
              },
              "&:active": {
                transform: loading ? "none" : "translateY(-1px)",
              },
            }}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p
          style={{
            textAlign: "center",
            marginTop: "32px",
            color: "#64748b",
            fontSize: "15px",
            lineHeight: "1.6",
            letterSpacing: "0.3px",
          }}
        >
          Don't have an account?{" "}
          <a
            href="#"
            style={{
              color: "#000",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
              borderBottom: "2px solid transparent",
              padding: "2px 4px",
              "&:hover": {
                background: "linear-gradient(120deg, #f0f0f0 0%, #f0f0f0 100%)",
                backgroundSize: "100% 0.2em",
                backgroundPosition: "0 88%",
                backgroundRepeat: "no-repeat",
                borderRadius: "4px",
              },
            }}
          >
            Sign up
          </a>
        </p>
      </div>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, 10px) rotate(2deg); }
            50% { transform: translate(0, 20px) rotate(0deg); }
            75% { transform: translate(-10px, 10px) rotate(-2deg); }
          }
        `}
      </style>
    </div>
  );
}
