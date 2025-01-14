import { useState } from "react";
import "./Dashboard.css";
import companyLogo from "./../assets/logo.png";
import profile from "./../assets/pfp.jpeg";

function FundTable() {
  const funds = [
    {
      id: 1,
      name: "Growth Fund",
      manager: "Alice Johnson",
      AUM: "1M",
      status: "Active",
      investors: 200,
      KYC: "Completed",
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
      KYC: "Completed",
      risk: "Low",
    },
  ];

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

function Dashboard() {
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
              John Doe
            </span>
            <span
              style={{
                color: "#666",
                fontSize: "12px",
                display: "block",
                animation: "fadeIn 0.5s ease-in",
              }}
            >
              john.doe@example.com
            </span>
          </div>
          <img
            src={profile}
            alt="Profile"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
              animation: "fadeIn 0.5s ease-in",
            }}
          />
        </div>
      </div>
      <div>
        <p
          className="header"
          style={{
            animation: "slideInFromLeft 0.5s ease-out",
          }}
        >
          Welcome back, John Doe
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
              Manage Fund
            </button>
            <button
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
