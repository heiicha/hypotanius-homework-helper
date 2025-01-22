import { useState, useEffect } from "react";
import "./Dashboard.css";
import companyLogo from "./../assets/logo.png";
import profile from "./../assets/pfp.jpeg";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://dzkrxhjgneqqvylereku.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6a3J4aGpnbmVxcXZ5bGVyZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTIzNDcsImV4cCI6MjA1MjI2ODM0N30.94q-TVZxU6jDPRDQStAMQhBrbCRrlOprEw-k3MI51_I"
);
const funds = [
  {
    id: 1,
    name: "Growth Fund",
    manager: "Alice Johnson",
    AUM: "1M",
    status: "Active",
    investors: 200,
    KYC: "Verified",
    risk: "High",
  },
  {
    id: 2,
    name: "Income Fund",
    manager: "Bob Smith",
    AUM: "500K",
    status: "Inactive",
    investors: 50,
    KYC: "Pending",
    risk: "Medium",
  },
  {
    id: 3,
    name: "Equity Fund",
    manager: "Charlie Brown",
    AUM: "2M",
    status: "Active",
    investors: 300,
    KYC: "Verified",
    risk: "Low",
  },
];

function FundTable() {
  return (
    <table border="1">
      <thead>
        <tr style={{ backgroundColor: "#F5F5F5", color: "#ffffff" }}>
          <th>FUND NAME</th>
          <th>FUND MANAGER</th>
          <th>TOTAL AUM</th>
          <th>STATUS</th>
          <th>INVESTORS</th>
          <th>KYC</th>
          <th>RISK LEVEL</th>
        </tr>
      </thead>
      <tbody>
        {funds.map((fund) => (
          <tr
            key={fund.id}
            style={{
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            <td>{fund.name}</td>
            <td>{fund.manager}</td>
            <td>{fund.AUM}</td>
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
                      fund.status === "Active" ? "#77B254" : "#FB4141",
                    marginRight: "8px",
                    animation: "pulse 2s infinite",
                  }}
                ></span>
                {fund.status}
              </span>
            </td>
            <td>{fund.investors}</td>
            <td>{fund.KYC}</td>
            <td>{fund.risk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Modal({ isOpen, funds, onClose, onSelect }) {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const handleFundSelect = (fund) => {
    navigate("/manage", { state: { fund } });
    onSelect(fund);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          minWidth: "300px",
        }}
      >
        <h3 style={{ color: "black" }}>Select a Fund</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {funds.map((fund) => (
            <li
              key={fund.id}
              style={{
                margin: "10px 0",
                cursor: "pointer",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
                transition: "background-color 0.3s",
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "24px",
              }}
              onClick={() => handleFundSelect(fund)}
            >
              {fund.name}
            </li>
          ))}
        </ul>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onClose}
            style={{
              marginTop: "10px",
              padding: "15px",
              width: "100%",
              backgroundColor: "#000000",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
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
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        let profileUrl = profile;
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFund, setSelectedFund] = useState(null);

  const handleManage = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFundSelect = (fund) => {
    console.log("Selected Fund:", fund);
    setSelectedFund(fund);
    setModalOpen(false);
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
          <div
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={() => navigate("/forgot")}
          >
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
          Keep your pennies, I’m chasing dollars.
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
              onClick={handleManage}
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
              Manage Fund
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
              New Fund
            </button>
          </div>
        </div>
        <FundTable />
        <Modal
          isOpen={isModalOpen}
          funds={funds}
          onClose={handleModalClose}
          onSelect={handleFundSelect}
        />
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

export default Dashboard;
