import React, { useState, useEffect } from "react";

export default function Waterfall() {
  const [waterfall, setWaterfall] = useState(() => {
    const saved = localStorage.getItem("waterfall");
    return saved
      ? JSON.parse(saved)
      : {
          hurdleRate: "",
          secondHurdleRate: "",
          hurdleDescription: "",
          carriedInterest: "",
          secondCarriedInterest: "",
          carriedInterestDescription: "",
          clawback: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("waterfall", JSON.stringify(waterfall));
  }, [waterfall]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWaterfall({
      ...waterfall,
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
          <text style={{ color: "#505050" }}>Step 3</text> <br />
          <text style={{ color: "#000000", fontSize: 25 }}>Waterfall</text>
          <br />
          <form onSubmit={handleSubmit} style={{ display: "grid" }}>
            <div style={{ marginTop: 20 }}></div>

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
                  name="hurdleRate"
                  value={waterfall.hurdleRate}
                  onChange={handleInputChange}
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
                  name="secondHurdleRate"
                  value={waterfall.secondHurdleRate}
                  onChange={handleInputChange}
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
                  name="hurdleDescription"
                  value={waterfall.hurdleDescription}
                  onChange={handleInputChange}
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
                    Carried Interest
                  </label>
                  <input
                    type="text"
                    name="carriedInterest"
                    value={waterfall.carriedInterest}
                    onChange={handleInputChange}
                    placeholder="$ input Carried Interest"
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
                    Second Carried Interest
                  </label>
                  <input
                    type="text"
                    name="secondCarriedInterest"
                    value={waterfall.secondCarriedInterest}
                    onChange={handleInputChange}
                    placeholder="$ input second carried interest"
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
                  Carried Interest Description
                </label>
                <input
                  type="text"
                  name="carriedInterestDescription"
                  value={waterfall.carriedInterestDescription}
                  onChange={handleInputChange}
                  placeholder="Description Carried Interest"
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
                        name="clawback"
                        value={strategy}
                        checked={waterfall.clawback === strategy}
                        onChange={handleInputChange}
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
