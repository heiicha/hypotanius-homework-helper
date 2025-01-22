import React from "react";

export default function OtherInformation() {
  return (
    <div>
      {/* Form Section */}
      <div style={{ display: "flex" }}>
        {/* Form Content */}
        <div style={{ flex: 3 }}>
          <text style={{ color: "#505050" }}>Step 4</text> <br />
          <text
            style={{ marginBottom: "25px", color: "#000000", fontSize: 25 }}
          >
            Other Information
          </text>
          <br />
          <form style={{ display: "grid", gap: "25px" }}>
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
                  Name Fund
                </label>
                <input
                  type="text"
                  placeholder="Name fund..."
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
                  Registered Address
                </label>
                <input
                  type="text"
                  placeholder="Input Registered Address"
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

            {/* Currency */}
            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  City
                </label>
                <input
                  type="text"
                  placeholder="Input Registered Address"
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
                  State
                </label>
                <input
                  type="text"
                  placeholder="Input House Number"
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

            {/* Other Fields */}
            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Country
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
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
                  ZIP Code
                </label>
                <input
                  type="text"
                  placeholder="Input Registered Address"
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

            {/* Strategy */}
            <div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Desription"
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
