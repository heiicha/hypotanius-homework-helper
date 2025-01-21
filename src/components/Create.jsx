import React from "react";
import { useNavigate } from "react-router-dom";
import Identity from "./forms/Identity";

export default function CreateFundForm() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "15px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#000",
          }}
          onClick={navigate("/dashboard")}
        >
          &larr; Create New Fund
        </div>
        <div>
          <button
            style={{
              marginRight: "15px",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "12px 25px",
              borderRadius: "5px",
              fontWeight: "bold",
              border: "1.5px solid #E3E3E3",
              cursor: "pointer",
            }}
          >
            Save as Draft
          </button>
          <button
            style={{
              backgroundColor: "#000000",
              padding: "12px 25px",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </div>
      </header>
      <Identity />
    </div>
  );
}
