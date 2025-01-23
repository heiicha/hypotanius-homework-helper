import React, { useState, useEffect } from "react";

export default function Identity() {
  const [identity, setIdentity] = useState({
    fundName: "",
    fundStatus: "",
    currency: "",
    legalForm: "",
    dateIncorporation: "",
    vintageYears: "",
    fundType: "",
    region: "",
    geographyFocus: "",
    sectorFocus: "",
    strategy: "",
    number: "",
  });

  const handleChange = () => {
    setIdentity({
      ...identity,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3 }}>
          <text style={{ color: "#505050" }}>Step 1</text> <br />
          <text
            style={{ marginBottom: "25px", color: "#000000", fontSize: 25 }}
          >
            Information Details
          </text>
          <br />
          <form style={{ display: "grid", gap: "25px" }}>
            <div style={{ marginTop: 20 }}>
              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Type Fund
              </label>
              <div style={{ display: "flex", gap: "25px" }}>
                {[
                  "Family",
                  "Management Company",
                  "Target Commitment",
                  "Other",
                ].map((type) => (
                  <label
                    key={type}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <input
                      type="radio"
                      name="fundType"
                      value={type}
                      checked={identity.fundType === type}
                      onChange={handleChange}
                      style={{ marginRight: "8px" }}
                    />
                    {type}
                  </label>
                ))}
              </div>
              <div
                style={{
                  marginTop: "10px",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  width: "15%",
                  color: "black",
                }}
              >
                Company ABC
              </div>
            </div>

            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Name Fund
                </label>
                <input
                  type="text"
                  name="fundName"
                  placeholder="Name fund..."
                  value={identity.fundName}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Fund Status
                </label>
                <select
                  name="fundStatus"
                  value={identity.fundStatus}
                  onChange={handleChange}
                  style={{
                    width: "84%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                >
                  <option>Select fund status</option>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Currency
                </label>
                <select
                  name="currency"
                  value={identity.currency}
                  onChange={handleChange}
                  style={{
                    width: "84%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                >
                  <option>Select currency</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Legal Form
                </label>
                <select
                  name="legalForm"
                  value={identity.legalForm}
                  onChange={handleChange}
                  style={{
                    width: "84%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                >
                  <option>Select legal form</option>
                  <option value="LLC">LLC</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Date of Incorporation
                </label>
                <input
                  type="text"
                  name="dateIncorporation"
                  placeholder="DD/MM/YYYY"
                  value={identity.dateIncorporation}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Vintage Years
                </label>
                <input
                  type="text"
                  name="vintageYears"
                  placeholder="e.g. 2004"
                  value={identity.vintageYears}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Strategy
              </label>
              <div style={{ display: "flex", gap: "25px", color: "#000" }}>
                {["Real Estate", "Real Estate Core", "Other"].map(
                  (strategyOption) => (
                    <label
                      key={strategyOption}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="radio"
                        name="strategy"
                        value={strategyOption}
                        checked={identity.strategy === strategyOption}
                        onChange={handleChange}
                        style={{ marginRight: "8px", color: "#000" }}
                      />
                      {strategyOption}
                    </label>
                  )
                )}
              </div>
              <div
                style={{
                  marginTop: "10px",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  width: "10%",
                  color: "black",
                }}
              >
                Startup
              </div>
              <div style={{ display: "flex", gap: "30px" }}>
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#000",
                    }}
                  >
                    Geography Focus
                  </label>
                  <select
                    name="geographyFocus"
                    value={identity.geographyFocus}
                    onChange={handleChange}
                    style={{
                      width: "84%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                  >
                    <option>Select geography focus</option>
                    <option value="North America">North America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#000",
                    }}
                  >
                    Sector Focus
                  </label>
                  <select
                    name="sectorFocus"
                    value={identity.sectorFocus}
                    onChange={handleChange}
                    style={{
                      width: "84%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                  >
                    <option>Select sector focus</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
              </div>
              <div style={{ flex: 1, marginTop: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Number
                </label>
                <input
                  type="text"
                  name="number"
                  placeholder="Input code unique number"
                  value={identity.number}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div {
              display: block;
              width: 100%;
            }
            form {
              grid-template-columns: 1fr;
            }
            .form-group {
              display: block;
              width: 100%;
            }
            select, input[type="text"] {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
