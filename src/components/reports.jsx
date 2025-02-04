import { useState, useEffect } from "react";
import "./reports.css";
import companyLogo from "./../assets/logo.png";
import profile from "./../assets/pfp.jpeg";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { supabase } from "../App";


function InvestorTable() {

  const [reports, setReports] = useState([]);

  async function listAllReports() {
  
    const { data, error } = await supabase
    .storage
    .from('1-reports')
    .list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'created_at', order: 'asc'}
    })
  
    return data
  }

  useEffect(() => {
    const fetchReports = async () => {
      const reportsData = await listAllReports();
      console.log(reportsData)
      setReports(reportsData); // Update the state with the fetched reports
    };
    
    fetchReports();
  }, []); 

  return (
    <table border="1">
      <thead>
        <tr style={{ backgroundColor: "#F5F5F5", color: "#ffffff" }}>
          <th>REPORT NAME</th>
          <th>REPORT TYPE</th>
          <th>PERIOD</th>
          <th>UPLOAD DATE</th>
          <th>UPLOADING USER</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr
            key={report.id}
            style={{
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            <td>{report.name.split('.')[0]}</td>
            <td>{report.name.split('.')[2]}</td>
            <td>{report.name.split('.')[3]}</td>
            <td>{report.name.split('.')[4]}</td>
            <td>{report.name.split('.')[5]}</td>
            <td>{report.name.split('.')[6]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

async function uploadToSupabase(file) {

  const type = "Quarterly Report"
  const period = "Jan-Mar 2025"
  const date = "05 January 2025"
  const user = "Jane Smith"
  const status_point = "Active"
  
  var file_name = file.name
  file_name = file_name.concat(".", type, ".", period, ".", date, ".", user, ".", status_point)

  const { data, error } = await supabase
  .storage
  .from('1-reports')
  .upload(file_name, file, {
    cacheControl: '3600',
    upsert: true
  })
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadToSupabase(file);
    }
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
              onClick={() => document.getElementById("fileInput").click()}
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
              Add Report
            </button>
            <input
            type="file"
            id="fileInput"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
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
