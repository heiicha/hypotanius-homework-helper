import React, { useState } from "react";
import "../Dashboard.css";
import companyLogo from "../../assets/logo.png";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://dzkrxhjgneqqvylereku.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6a3J4aGpnbmVxcXZ5bGVyZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTIzNDcsImV4cCI6MjA1MjI2ODM0N30.94q-TVZxU6jDPRDQStAMQhBrbCRrlOprEw-k3MI51_I"
);

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (authError) throw authError;
      navigate("/verification");

      // Upload profile picture if provided
      let profileUrl = null;

      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: authData.user.id,
          full_name: name,
          avatar_url: profileUrl,
        },
      ]);

      if (profileError) throw profileError;

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

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
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "48px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.06)",
          width: "100%",
          maxWidth: "420px",
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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            style={{
              width: "90%",
              padding: "16px 20px",
              fontSize: "16px",
              border: "2px solid #eef2f7",
              borderRadius: "16px",
              marginBottom: "20px",
              outline: "none",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#000000",
            }}
            required
            disabled={loading}
          />

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
              outline: "none",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
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
              marginBottom: "20px",
              outline: "none",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#000000",
            }}
            required
            disabled={loading}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "24px",
                height: "24px",
              }}
            >
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  opacity: 0,
                  cursor: "pointer",
                }}
                disabled={loading}
              />
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  border: "2px solid #000",
                  borderRadius: "6px",
                  backgroundColor: agreeToTerms ? "#000" : "transparent",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {agreeToTerms && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
            </div>
            <label
              style={{ color: "#64748b", fontSize: "14px", cursor: "pointer" }}
            >
              I agree to the Terms and Conditions
            </label>
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
            }}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "32px",
            color: "#64748b",
            fontSize: "15px",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#000",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
