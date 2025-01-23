import React, { useState } from "react";

export default function ManagementFee() {
  const [management, setManagement] = useState({
    managementFee: "",
    fundInformation: "",
    feeOutsideCommitment: "",
    feeCallFrequency: "",
    feePolicy: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setManagement({
      ...management,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3 }}>
          <text style={{ color: "#505050" }}>Step 2</text> <br />
          <text
            style={{ marginBottom: "25px", color: "#000000", fontSize: 25 }}
          >
            Management Fee
          </text>
          <br />
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
              name="managementFee"
              value={management.managementFee}
              onChange={handleInputChange}
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
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "25px" }}
          >
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
                      name="fundInformation"
                      value={type}
                      checked={management.fundInformation === type}
                      onChange={handleInputChange}
                      style={{ marginRight: "8px" }}
                    />
                    {type}
                  </label>
                ))}
              </div>
              {management.fundInformation === "Other" && (
                <input
                  type="text"
                  name="fundInformationOther"
                  value={management.fundInformationOther}
                  onChange={handleInputChange}
                  placeholder="Other"
                  style={{
                    marginTop: "10px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              )}
            </div>

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
                      name="feeOutsideCommitment"
                      value={type}
                      checked={management.feeOutsideCommitment === type}
                      onChange={handleInputChange}
                      style={{ marginRight: "8px" }}
                    />
                    {type}
                  </label>
                ))}
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
                  Fee Call Frequency
                </label>
                <select
                  name="feeCallFrequency"
                  value={management.feeCallFrequency}
                  onChange={handleInputChange}
                  style={{
                    width: "52%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                >
                  <option value="">Select Management fee</option>
                  <option value="USD">USD</option>
                  <option value="SGD">SGD</option>
                  <option value="Yen">Yen</option>
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
              <textarea
                name="feePolicy"
                value={management.feePolicy}
                onChange={handleInputChange}
                placeholder="Description fee policy"
                style={{
                  width: "50%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#000",
                  height: "100px",
                }}
              />
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
            select, input[type="text"], textarea {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
