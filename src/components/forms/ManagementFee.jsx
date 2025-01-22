import React from "react";

export default function ManagementFee() {
  return (
    <div>
      {/* Form Section */}
      <div style={{ display: "flex" }}>
        {/* Form Content */}
        <div style={{ flex: 3 }}>
          <text style={{ color: "#505050" }}>Step 2</text> <br />
          <text
            style={{ marginBottom: "25px", color: "#000000", fontSize: 25 }}
          >
            Management Fee
          </text>
          <br />
          {/* Management Fee */}
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#000",
              }}
            >
              Management Fee
            </label>
            <input
              type="text"
              placeholder="$ input your amount"
              style={{
                width: "50%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#fff",
                color: "#000",
              }}
            />
          </div>
          <form style={{ display: "grid", gap: "25px" }}>
            {/* Information Fund */}
            <div style={{ marginTop: 20 }}>
              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Information Fund
              </label>
              <div style={{ display: "flex", gap: "25px" }}>
                {[
                  "Family",
                  "Commitment",
                  "Remaining cost of investments",
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
            </div>

            {/* Manage Commitment */}
            <div style={{ marginTop: 0 }}>
              <label
                style={{ display: "block", marginBottom: "8px", color: "#000" }}
              >
                Information Fund
              </label>
              <div style={{ display: "flex", gap: "25px" }}>
                {["Yes", "No"].map((type) => (
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
            </div>

            {/* Name Fund */}
            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Free Call Frequency
                </label>
                <select
                  style={{
                    width: "52%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                >
                  <option>Select Management fee</option>
                </select>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#000",
                }}
              >
                Fee Policy
              </label>
              <input
                type="text"
                placeholder="Description fee policy"
                style={{
                  width: "50%",
                  height: "200%",
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
