import React, { useState } from "react";

export default function OtherInformation() {
  const [others, setOthers] = useState({
    nameFund: "",
    registeredAddress: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOthers((prevOthers) => ({
      ...prevOthers,
      [name]: value,
    }));
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3 }}>
          <text style={{ color: "#505050" }}>Step 4</text> <br />
          <text
            style={{ marginBottom: "25px", color: "#000000", fontSize: 25 }}
          >
            Other Information
          </text>
          <br />
          <form style={{ display: "grid", gap: "25px" }}>
            <div style={{ display: "flex", gap: "25px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#000",
                  }}
                >
                  House Number
                </label>
                <input
                  type="text"
                  name="nameFund"
                  placeholder="Name fund..."
                  value={others.nameFund}
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
                  Registered Address
                </label>
                <input
                  type="text"
                  name="registeredAddress"
                  placeholder="Input Registered Address"
                  value={others.registeredAddress}
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
                  name="city"
                  placeholder="Input City"
                  value={others.city}
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
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="Input State"
                  value={others.state}
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
                  name="country"
                  placeholder="Input Country"
                  value={others.country}
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
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Input ZIP Code"
                  value={others.zipCode}
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
                  name="description"
                  placeholder="Description"
                  value={others.description}
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
