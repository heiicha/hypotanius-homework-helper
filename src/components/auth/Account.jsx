import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { supabase } from "../../App";
import Password from "./Password";

function Account() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error logging out:", error.message);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
              <div style={{ flex: 1 }}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  value={user?.user_metadata?.full_name.split(" ")[0]}
                  style={{ backgroundColor: "#ffffff" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={user?.user_metadata?.full_name.split(" ")[1]}
                  style={{ backgroundColor: "#ffffff" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
              <div style={{ flex: 1 }}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={user?.email}
                  style={{ backgroundColor: "#ffffff" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value="085157233698"
                  style={{ backgroundColor: "#ffffff" }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Location</label>
              <input
                type="text"
                placeholder="Location"
                value="1234 ABC Lane, Houston, TX, 77123"
                style={{
                  width: "97.5%",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
            <style>
              {`
                input {
                  padding: 15px;
                  width: 95%;
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  margin: 5px 0;
                  color: #000;
                }
                input::placeholder {
                  color: #000;
                }
                label {
                  display: block;
                  margin-bottom: 5px;
                  font-weight: bold;
                  color: #000;
                }
              `}
            </style>
          </div>
        );
      case "notifications":
        return (
          <div>
            <h2 style={{ color: "black" }}>Notification Settings</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  flex: 1,
                  color: "black",
                  fontSize: 17,
                }}
              >
                <span style={{ fontWeight: "bold" }}>Email Notifications</span>
                <br />
                <span
                  style={{
                    color: "#7D858E",
                    fontSize: 15,
                    fontWeight: "inherit",
                  }}
                >
                  Receive updates about your account.
                </span>
              </p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  flex: 1,
                  color: "black",
                  fontSize: 17,
                }}
              >
                <span style={{ fontWeight: "bold" }}>SMS Notifications</span>
                <br />
                <span
                  style={{
                    color: "#7D858E",
                    fontSize: 15,
                    fontWeight: "inherit",
                  }}
                >
                  Receive updates about your account.
                </span>
              </p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <h2 style={{ color: "black" }}>Privacy Settings</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  flex: 1,
                  color: "black",
                  fontSize: 17,
                }}
              >
                <span style={{ fontWeight: "bold" }}>Data Sharing</span>
                <br />
                <span
                  style={{
                    color: "#7D858E",
                    fontSize: 15,
                    fontWeight: "inherit",
                  }}
                >
                  Share data across devices and accounts.
                </span>
              </p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  flex: 1,
                  color: "black",
                  fontSize: 17,
                }}
              >
                <span style={{ fontWeight: "bold" }}>Access Permissions</span>
                <br />
                <span
                  style={{
                    color: "#7D858E",
                    fontSize: 15,
                    fontWeight: "inherit",
                  }}
                >
                  Manage who can view your account.
                </span>
              </p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <style>
              {`
              .switch {
                position: relative;
                display: inline-block;
                width: 34px;
                height: 20px;
              }
              .switch input {
                opacity: 0;
                width: 0;
                height: 0;
              }
              .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: .4s;
                border-radius: 34px;
              }
              .slider:before {
                position: absolute;
                content: "";
                height: 14px;
                width: 14px;
                left: 3px;
                bottom: 3px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
              }
              input:checked + .slider {
                background-color: #000;
              }
              input:checked + .slider:before {
                transform: translateX(14px);
              }
            `}
            </style>
          </div>
        );
      case "password":
        return <Password />;
      default:
        return null;
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "#000000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {user?.email ? user.email[0].toUpperCase() : "?"}
          </div>
          <div>
            <h1 style={{ fontSize: "24px", margin: 0, color: "black" }}>
              {user?.user_metadata?.full_name || "John Doe"}
            </h1>
            <p style={{ margin: 0, color: "#7D858E" }}>
              {user?.email || "omar@example.com"}
            </p>
            <p style={{ margin: 0, color: "#7D858E" }}>
              085157233698 • 1234 ABC Lane, Houston, TX, 77123
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setActiveTab("personal")}
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "transparent",
            borderBottom: activeTab === "personal" ? "3px solid black" : "none",
            cursor: "pointer",
            fontWeight: activeTab === "personal" ? "bold" : "normal",
            color: activeTab === "personal" ? "black" : "#6B6B6B",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Personal Information
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "transparent",
            borderBottom:
              activeTab === "notifications" ? "3px solid black" : "none",
            cursor: "pointer",
            fontWeight: activeTab === "notifications" ? "bold" : "normal",
            color: activeTab === "notifications" ? "black" : "#6B6B6B",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab("password")}
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "transparent",
            borderBottom: activeTab === "password" ? "3px solid black" : "none",
            cursor: "pointer",
            fontWeight: activeTab === "password" ? "bold" : "normal",
            color: activeTab === "password" ? "black" : "#6B6B6B",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Passsword
        </button>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default Account;
