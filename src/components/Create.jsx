import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Identity from "./forms/Identity";
import ManagementFee from "./forms/ManagementFee";
import Waterfall from "./forms/Waterfall";
import OtherInformation from "./forms/OtherInformation";

export default function CreateFundForm() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const renderStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <Identity />;
      case 1:
        return <ManagementFee />;
      case 2:
        return <Waterfall />;
      case 3:
        return <OtherInformation />;
      default:
        return <Identity />;
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          onClick={() => navigate("/dashboard")}
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
      <div style={{ display: "flex" }}>
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
                  marginBottom: "25px",
                  cursor: "pointer",
                }}
                onClick={() => handleStepClick(index)}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: index === activeStep ? "#000" : "#E3E3E3", // Change color based on active step
                    color: index === activeStep ? "#FFF" : "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    marginRight: "15px",
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
        <div style={{ flex: 3 }}>
          {renderStepComponent()} {/* renders active component */}
        </div>
      </div>
    </div>
  );
}
