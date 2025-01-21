import React from "react";

export default function IdentityMobile() {
  return (
    <div>
      {/* Form Section */}
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        {/* Left Sidebar */}
        <div style={{ flex: 1 }}>
          <ol style={{ listStyle: "none", padding: 0 }}>
            {[
              "Identity",
              "Management Fee",
              "Waterfall",
              "Other Information",
            ].map((step, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: index === 0 ? "#000" : "#E3E3E3",
                    color: index === 0 ? "#FFF" : "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {index + 1}
                </div>
                <div>
                  <div style={{ fontWeight: "bold", color: "#000" }}>
                    {step}
                  </div>
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    Lorem ipsum dolor sit amet
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Form Content */}
        <div style={{ flex: 3 }}>
          <h2 style={{ marginBottom: "15px", color: "#000" }}>Step 1</h2>
          <h3 style={{ marginBottom: "15px", color: "#000000" }}>
            Information Details
          </h3>
          <form style={{ display: "grid", gap: "15px" }}>
            {/* Type Fund */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Type Fund
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
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
                      name="typeFund"
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
                  width: "90%",
                  color: "black",
                }}
              >
                Company ABC
              </div>
            </div>

            {/* Name Fund */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
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
                placeholder="Name fund..."
                style={{
                  width: "90%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />

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
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option>Select fund status</option>
              </select>
            </div>

            {/* Currency */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
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
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option>Select currency</option>
              </select>

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
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option>Select legal form</option>
              </select>
            </div>

            {/* Other Fields */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
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
                placeholder="DD/MM/YYYY"
                style={{
                  width: "94%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />

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
                placeholder="e.g. 2004"
                style={{
                  width: "94%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
            </div>

            {/* Strategy */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Strategy
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "#000",
                }}
              >
                {["Real Estate", "Real Estate Core", "Other"].map(
                  (strategy) => (
                    <label
                      key={strategy}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="radio"
                        name="strategy"
                        style={{ marginRight: "8px", color: "#000" }}
                      />
                      {strategy}
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
                  width: "90%",
                  color: "black",
                }}
              >
                Startup
              </div>

              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Geography Focus
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option>Select geography focus</option>
              </select>

              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Sector Focus
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option>Select sector focus</option>
              </select>

              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Number
              </label>
              <input
                type="text"
                placeholder="Input code unique number"
                style={{
                  width: "90%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Media Queries */}
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
