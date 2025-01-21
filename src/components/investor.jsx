import { useState, useEffect } from "react";
import "./investor.css";
import companyLogo from "./../assets/logo.png";
import profile from "./../assets/pfp.jpeg";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://dzkrxhjgneqqvylereku.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6a3J4aGpnbmVxcXZ5bGVyZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTIzNDcsImV4cCI6MjA1MjI2ODM0N30.94q-TVZxU6jDPRDQStAMQhBrbCRrlOprEw-k3MI51_I"
);

function InvestorTable() {
  const investors = [
    {
      id: 1,
      investor_id: "#123NO42",
      name: "Jane Smith",
      amount: "1M",
      status: "Active",
      investors: 200,
      KYC: "Verified",
      risk: "High",
    },
    {
      id: 2,
      investor_id: "#123NO42",
      name: "Jane Smith",
      amount: "1M",
      status: "Active",
      investors: 200,
      KYC: "Verified",
      risk: "High",
    },
    {
      id: 3,
      investor_id: "#123NO42",
      name: "Jane Smith",
      amount: "1M",
      status: "Active",
      investors: 200,
      KYC: "Verified",
      risk: "High",
    },
  ];

  return (
    <table border="1">
      <thead>
        <tr style={{ backgroundColor: "#F5F5F5", color: "#ffffff" }}>
          <th>ID</th>
          <th>NAME</th>
          <th>AMOUNT</th>
          <th>STATUS</th>
          <th>INVESTORS</th>
          <th>KYC</th>
          <th>RISK LEVEL</th>
        </tr>
      </thead>
      <tbody>
        {investors.map((investor) => (
          <tr
            key={investor.id}
            style={{
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            <td>{investor.investor_id}</td>
            <td>{investor.name}</td>
            <td>{investor.amount}</td>
            <td>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor:
                      investor.status === "Active" ? "#77B254" : "#FB4141",
                    marginRight: "8px",
                    animation: "pulse 2s infinite",
                  }}
                ></span>
                {investor.status}
              </span>
            </td>
            <td>{investor.investors}</td>
            <td>{investor.KYC}</td>
            <td>{investor.risk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Investor() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profileUrl: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Get profile data from profiles table
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        // Get profile picture URL if it exists
        let profileUrl = profile; // Default to local image
        if (profileData?.avatar_url) {
          const { data: imageData } = await supabase.storage
            .from("profiles")
            .download(profileData.avatar_url);
          if (imageData) {
            profileUrl = URL.createObjectURL(imageData);
          }
        }

        setUserData({
          name:
            profileData?.full_name || user.user_metadata?.full_name || "User",
          email: user.email,
          profileUrl,
        });
      }
    };

    fetchUserData();
  }, []);
  const navigate = useNavigate();
  const handleNew = () => {
    navigate("/create");
  };

  return (
    <>
      <div className="view-head">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={companyLogo}
            className="logo"
            alt="Company Logo"
            style={{
              animation: "slideIn 0.5s ease-out",
            }}
          />
          <input
            name="search"
            placeholder="Search..."
            style={{
              animation: "slideIn 0.5s ease-out",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <span
              style={{
                color: "black",
                display: "block",
                animation: "fadeIn 0.5s ease-in",
              }}
            >
              {userData.name}
            </span>
            <span
              style={{
                color: "#666",
                fontSize: "12px",
                display: "block",
                animation: "fadeIn 0.5s ease-in",
              }}
            >
              {userData.email}
            </span>
          </div>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#000000",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            {userData.email ? userData.email[0].toUpperCase() : "?"}
          </div>
        </div>
      </div>
      <div>
        <p
          className="header"
          style={{
            animation: "slideInFromLeft 0.5s ease-out",
          }}
        >
          Welcome back, {userData.name}
        </p>
        <p
          className="sub-header"
          style={{
            animation: "slideInFromLeft 0.5s ease-out",
          }}
        >
          Lorem ipsum dolor siamet
        </p>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            alignItems: "center",
            justifyContent: "space-between",
            animation: "fadeIn 1s ease-in",
          }}
        >
          <p className="title">Overview</p>
          <div>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                color: "#333333",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "bold",
                animation: "slideInFromRight 0.5s ease-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              Filter
            </button>
            <button
              onClick={handleNew}
              style={{
                padding: "10px 20px",
                backgroundColor: "#000000",
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                marginLeft: 10,
                animation: "slideInFromRight 0.5s ease-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#333333",
                },
              }}
            >
              Add Investor
            </button>
          </div>
        </div>
        <InvestorTable />
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideInFromLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideInFromRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes fadeInRotate {
            from { 
              transform: rotate(-10deg);
              opacity: 0;
            }
            to { 
              transform: rotate(0);
              opacity: 1;
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
}

export default Investor;
