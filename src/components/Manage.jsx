import { useLocation } from "react-router-dom";
import { useState } from 'react';
import * as XLSX from "xlsx";
import ApexCharts from 'apexcharts';
import companyLogo from "./../assets/logo.png";
import profile from "./../assets/pfp.jpeg";

function readExcel(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    console.log(jsonData); // Debugging log to ensure data is read correctly

    const categories = jsonData.slice(1).map(row => row[0]);
    const seriesData = jsonData.slice(1).map(row => row[1]);

    createChart(categories, seriesData); // Call createChart to render the chart
  };
  reader.readAsArrayBuffer(file);
}

function createChart(categories, seriesData) {
  console.log("Categories", categories);
  console.log("seriesData", seriesData);

  const options = {
    series: [{
      name: 'Data',
      data: seriesData
    }],
    xaxis: {
      categories: categories
    },
    chart: {
      type: 'line',
      height: 350
    },
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

export default function Manage() {
  const location = useLocation();
  const fund = location.state?.fund;

  const [count, setCount] = useState(0);

  const handleFileChange = (e) => {
    console.log("File selected:", e.target.files[0]); // Log to confirm file selection
    const file = e.target.files[0];
    if (file) {
      readExcel(file); // Pass file to readExcel function
    }
  };

  if (!fund) {
    return (
      <p style={{ color: "black" }}>
        No fund data available. Please select a fund first.
      </p>
    );
  }

  return (
    <div>
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
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ color: "black", marginRight: "750px" }}>{fund.name}</h1>
        <input type="file" id="fileInput" accept=".xlsx, .xls" onChange={handleFileChange} />
      </div>
      <div style={{ alignItems: "center" }}>
        <h2 style={{ color: "black" }}>About Fund</h2>
        <p style={{ color: "gray" }}> Lorem ipsum dolor</p>
      </div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "50px"}}>
        <div style={{ display: "flex", gap: "20px"}}>
          <div
            style={{
              display: "flex",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              padding: "16px",
              width: "300px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <p style={{ color: "black", fontSize: "14px" }}>Total Funds</p>
              <h2 style={{ color: "black" }}>{fund.AUM}</h2>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px"}}>
          <div
            style={{
              display: "flex",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              padding: "16px",
              width: "300px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <p style={{ color: "black", fontSize: "14px" }}>Active Investors</p>
              <h2 style={{ color: "#2563eb" }}>{fund.investors}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
            style={{
              display: "flex",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              padding: "16px",
              width: "1100px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
          <div style={{width: "1100px"}} id="chart"></div>
      </div>
    </div>
  );
}

/*
<p style={{ color: "black" }}>Name: {fund.name}</p>
        <p style={{ color: "black" }}>Manager: {fund.manager}</p>
        <p style={{ color: "black" }}>AUM: {fund.AUM}</p>
        <p style={{ color: "black" }}>Status: {fund.status}</p>
        <p style={{ color: "black" }}>Investors: {fund.investors}</p>
        <p style={{ color: "black" }}>KYC: {fund.KYC}</p>
        <p style={{ color: "black" }}>Risk Level: {fund.risk}</p>
*/
