import { useState, useEffect } from "react";
import "./Dashboard.css";
import companyLogo from "./../assets/logo.png";
import profile from "./../assets/pfp.jpeg";
import { useNavigate } from "react-router-dom";
import { supabase } from "../App";

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
  {
    id: 4,
    name: "Balanced Fund",
    manager: "Diana Prince",
    AUM: "1.5M",
    status: "Active",
    investors: 150,
    KYC: "Verified",
    risk: "Medium",
  },
  {
    id: 5,
    name: "Hedge Fund",
    manager: "Ethan Hunt",
    AUM: "3M",
    status: "Active",
    investors: 400,
    KYC: "Verified",
    risk: "High",
  },
  {
    id: 6,
    name: "Real Estate Fund",
    manager: "Fiona Bell",
    AUM: "800K",
    status: "Inactive",
    investors: 80,
    KYC: "Pending",
    risk: "Low",
  },
  {
    id: 7,
    name: "Small Cap Fund",
    manager: "George Adams",
    AUM: "1.2M",
    status: "Active",
    investors: 120,
    KYC: "Verified",
    risk: "High",
  },
  {
    id: 8,
    name: "Tech Fund",
    manager: "Hannah Lee",
    AUM: "2.8M",
    status: "Active",
    investors: 320,
    KYC: "Verified",
    risk: "High",
  },
  {
    id: 9,
    name: "Blue Chip Fund",
    manager: "Ian Clark",
    AUM: "5M",
    status: "Active",
    investors: 500,
    KYC: "Verified",
    risk: "Low",
  },
];

function FundTable() {
  return (
    <table border="1" className="fund-table">
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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handleFundSelect = (fund) => {
    navigate("/manage", { state: { fund } });
    onSelect(fund);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < funds.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFunds = funds.slice(startIndex, endIndex);
  const totalPages = Math.ceil(funds.length / itemsPerPage);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 style={{ color: "black" }}>Select a Fund</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {currentFunds.map((fund) => (
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
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              color: "#000",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              marginRight: "10px",
              flex: 1,
            }}
          >
            {"<"}
          </button>
          <span style={{ alignSelf: "center", color: "black" }}>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={endIndex >= funds.length}
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              color: "#000",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              marginLeft: "10px",
              flex: 1,
            }}
          >
            {">"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "15px",
              width: "100%",
              backgroundColor: "#fff",
              color: "#000",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Close
          </button>
        </div>
      </div>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.5s ease-in-out;
          }

          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            min-width: 300px;
            animation: shrinkIn 0.1s ease-in-out;
          }

          @keyframes shrinkIn {
            from {
              transform: scale(0.5);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
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
            onClick={() => navigate("/account")}
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
      <div className="content-container">
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
          className="button-wrapper"
          style={{
            display: "flex",
            // marginTop: 40,
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
          .content-container {
            padding: 0 20px;
          }

          .fund-table {
            width: 100%;
            border-collapse: collapse;
          }

          @media (max-width: 768px) {
            .content-container {
              padding: 0 10px;
            }

            .fund-table {
              display: block;
              overflow-x: auto;
              white-space: nowrap;
              }

            .view-head {
              flex-direction: column;
            }

            .view-head img {
              margin-bottom: 10px;
            }

            .view-head input {
              width: 100%;
              margin-bottom: 10px;
            }

            .title, .header, .sub-header {
              text-align: center;
            }

            .header, .sub-header {
              font-size: 1.2rem;
              margin-bottom: 5px;
            }

            .title {
              font-size: 1.5rem;
            }

            button {
              width: 100%;
              margin-top: 10px;
            }
              .button-wrapper {
              flex-direction: column;
              margin-bottom: 20px
              }
          }

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
