import React, { useState } from "react";
import "./Dashboard.css";
import companyLogo from "./../assets/logo.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in:", userCredential.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log("Google sign in successful:", user);
      navigate("/dashboard");
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      const email = err.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(err);

      console.error("Google sign in error:", {
        errorCode,
        errorMessage,
        email,
        credential,
      });

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
              marginBottom: "16px",
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

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <div style={{ color: "#64748b", margin: "10px 0" }}>-or-</div>
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px",
              background: "white",
              color: "#333",
              border: "2px solid #eef2f7",
              borderRadius: "16px",
              fontSize: "17px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.4s ease",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
              />
            </svg>
            {loading ? "Signing in..." : "Sign in with Google"}
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
