import React from "react";

export default function Waterfall() {
  return (
    <div>
      {/* Form Section */}
      <div style={{ display: "flex" }}>
        {/* Form Content */}
        <div style={{ flex: 3 }}>
          <text style={{ color: "#505050" }}>Step 3</text> <br />
          <text style={{ color: "#000000", fontSize: 25 }}>Waterfall</text>
          <br />
          <form style={{ display: "grid" }}>
            {/* Type Fund */}
            <div style={{ marginTop: 20 }}></div>

            {/* Hurdle Rate */}
            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Hurdle Rate
                </label>
                <input
                  type="text"
                  placeholder="$ Input hurdle rates"
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
                  Second Hurdle Rate
                </label>
                <input
                  type="text"
                  placeholder="$ input second hurdle rate"
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
                  Hurdle Description
                </label>
                <input
                  type="text"
                  placeholder="Description hurdle"
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
              <div style={{ display: "flex", gap: "30px" }}>
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#000",
                    }}
                  >
                    Carried Intersted
                  </label>
                  <input
                    type="text"
                    placeholder="$ input Carried Intersted"
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
                    Second Carried Intersted
                  </label>
                  <input
                    type="text"
                    placeholder="$ input second carried intersted"
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
              <div style={{ flex: 1, marginTop: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  Carried Intersted Description
                </label>
                <input
                  type="text"
                  placeholder="Description Carried Intersted"
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
              <div style={{ marginTop: 20 }}>
                <label
                  style={{ display: "block", marginTop: "8px", color: "#000" }}
                >
                  Clawback
                </label>
                <div style={{ display: "flex", gap: "25px", color: "#000" }}>
                  {["Yes", "No"].map((strategy) => (
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
                  ))}
                </div>
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
