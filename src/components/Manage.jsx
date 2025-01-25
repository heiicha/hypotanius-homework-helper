import { useLocation } from "react-router-dom";
import { useState } from "react";
import * as XLSX from "xlsx";
import ApexCharts from "apexcharts";
import companyLogo from "./../assets/logo.png";
import profile from "./../assets/pfp.jpeg";

function readExcel(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    const categories = jsonData.slice(1).map((row) => row[0]);
    const seriesData = jsonData.slice(1).map((row) => row[1]);

    createChart(categories, seriesData);
  };
  reader.readAsArrayBuffer(file);
}

function createChart(categories, seriesData) {
  const options = {
    series: [
      {
        name: "Total Return",
        data: seriesData,
      },
    ],
    xaxis: {
      categories: categories,
    },
    chart: {
      type: "line",
      height: 350,
    },
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

export default function Manage() {
  const location = useLocation();
  const fund = location.state?.fund;

  const [activeTab, setActiveTab] = useState("info");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      readExcel(file);
    }
  };

  if (!fund) {
    return (
      <p style={{ color: "black" }}>
        No fund data available. Please select a fund first.
      </p>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <div>
            <h2>Informaton</h2>
            <p style={{ color: "#868686" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              nesciunt, autem, voluptate, quas quos quod aspernatur voluptatum
              quibusdam quae aut doloremque. Quisquam, quia. Quisquam, quia.
            </p>
          </div>
        );
      case "analytics":
        return (
          <div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #e5e5e5",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p>Total Funds</p>
                <h2 style={{ margin: 0, color: "#2563eb" }}>${fund.AUM}</h2>
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #e5e5e5",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p>Active Investors</p>
                <h2 style={{ margin: 0, color: "#2563eb" }}>
                  {fund.investors}
                </h2>
              </div>
            </div>
            <div
              style={{
                marginTop: "30px",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div id="chart" style={{ height: "350px" }}></div>
            </div>
          </div>
        );
      case "document":
        return (
          <div>
            <h2>Document</h2>
            <p style={{ color: "#868686" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              nesciunt, autem, voluptate, quas quos quod aspernatur voluptatum
              quibusdam quae aut doloremque. Quisquam, quia. Quisquam, quia.
            </p>
          </div>
        );
    }
  };
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        padding: "20px",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <img src={companyLogo} alt="Company Logo" />
        <input
          name="search"
          placeholder="Search..."
          style={{
            padding: "8px 12px",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
          }}
        />
      </header>

      {/* Fund Details Section */}
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ margin: 0 }}>{fund.name}</h1>
          <button
            onClick={() => document.getElementById("fileInput").click()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ffffff",
              color: "#000",
              border: "none",
              fontWeight: "bold",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Upload Document
          </button>
          <input
            type="file"
            id="fileInput"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <span
          style={{ display: "flex", alignItems: "center", color: "#6B6B6B" }}
        >
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: fund.status === "Active" ? "#77B254" : "#FB4141",
              marginRight: "8px",
            }}
          ></span>
          {fund.status}
        </span>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>About Fund</h2>
        <p style={{ lineHeight: 1.6, width: "80%", color: "#868686" }}>
          Lorem ipsum dolor sit amet consectetur. Scelerisque vitae metus auctor
          tincidunt sagittis tellus. Nulla nibh nunc tincidunt tristique odio
          purus enim tortor sem. Purus in magna neque id hendrerit augue velit
          a. Molestie nunc eget neque leo aliquet aliquam pellentesque nunc.
        </p>
      </section>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setActiveTab("info")}
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "transparent",
            borderBottom: activeTab === "info" ? "3px solid black" : "none",
            cursor: "pointer",
            fontWeight: activeTab === "info" ? "bold" : "normal",
            color: activeTab === "info" ? "black" : "#6B6B6B",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Information Fund
        </button>
        <button
          onClick={() => setActiveTab("document")}
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "transparent",
            borderBottom: activeTab === "document" ? "3px solid black" : "none",
            cursor: "pointer",
            fontWeight: activeTab === "document" ? "bold" : "normal",
            color: activeTab === "document" ? "black" : "#6B6B6B",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Document
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "transparent",
            borderBottom:
              activeTab === "analytics" ? "3px solid black" : "none",
            cursor: "pointer",
            fontWeight: activeTab === "analytics" ? "bold" : "normal",
            color: activeTab === "analytics" ? "black" : "#6B6B6B",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Analytics
        </button>
      </div>
      <section style={{ marginTop: "30px" }}>{renderContent()}</section>
    </div>
  );
}
