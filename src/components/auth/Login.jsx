import React, { useState, useEffect } from "react";
import "../Dashboard.css";
import companyLogo from "./../../assets/logo.png";
import welcomeImage from "./../../assets/welcome.png";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

  const handleGoogleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin + "/dashboard",
        },
      });

      if (error) throw error;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "48px",
            borderRadius: "24px",
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
                  ? "linear-gradient(45deg, #000000, #333333)"
                  : "linear-gradient(45deg, #000000, #333333)",
                color: "white",
                border: "none",
                borderRadius: "16px",
                fontSize: "17px",
                fontWeight: "600",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.4s ease",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                marginBottom: "16px",
              }}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div style={{ textAlign: "center" }}>
            <p
              onClick={() => navigate("/forgot")}
              style={{
                color: "#000",
                textDecoration: "underline",
                fontWeight: "600",
                transition: "all 0.3s ease",
                borderBottom: "2px solid transparent",
                padding: "2px 4px",
              }}
            >
              Forgot password?
            </p>
            <div style={{ color: "#64748b", margin: "10px 0" }}>-or-</div>
            <button
              onClick={handleGoogleSignIn}
              style={{
                width: "100%",
                padding: "16px",
                background: "white",
                color: "#333",
                border: "2px solid #eef2f7",
                borderRadius: "16px",
                fontSize: "17px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.4s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>

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
              href="/"
              style={{
                color: "#000",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                borderBottom: "2px solid transparent",
                padding: "2px 4px",
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      {window.innerWidth > 1500 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            backgroundColor: "#CBCBCB",
            overflow: "hidden",
            flex: 0.6,
          }}
        >
          <img
            src={welcomeImage}
            alt="Welcome"
            style={{
              width: "95%",
              height: "110%",
              objectFit: "contain",
              animation: "fadeInRotate 1s ease-out",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            backgroundColor: "#CBCBCB",
            overflow: "hidden",
            flex: 1,
          }}
        >
          <img
            src={welcomeImage}
            alt="Welcome"
            style={{
              width: "95%",
              height: "110%",
              objectFit: "contain",
              animation: "fadeInRotate 1s ease-out",
            }}
          />
        </div>
      )}
    </div>
  );
}
