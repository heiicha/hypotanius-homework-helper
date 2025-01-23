import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Identity from "./forms/Identity";
import ManagementFee from "./forms/ManagementFee";
import Waterfall from "./forms/Waterfall";
import OtherInformation from "./forms/OtherInformation";
import uploadToSupabase from "./forms/Master";

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

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleContinue = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      const confirmSubmission = window.confirm(
        "Are you sure you want to submit this form?"
      );

      if (confirmSubmission) {
        navigate("/form-success");
        uploadToSupabase()
      }
    }
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
            onClick={handleBack}
          >
            Back
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
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </header>
      <div className={isMobile ? "mobile-view" : "desktop-view"}>
        <div className="steps-container">
          <ol className="steps-list">
            {["Identity", "Management", "Waterfall", "Others"].map(
              (step, index) => (
                <li
                  key={index}
                  className="step-item"
                  onClick={() => handleStepClick(index)}
                >
                  <div
                    className={`step-circle ${
                      index === activeStep ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <div className="step-title">{step}</div>
                    <div className="step-subtitle">Placeholder</div>
                  </div>
                </li>
              )
            )}
          </ol>
        </div>
        <div className="form-container">{renderStepComponent()}</div>
      </div>

      <style>
        {`
    .desktop-view {
      display: flex;
    }

    .mobile-view {
      display: block;
      width: 80%;
    }

    .steps-container {
      flex: 0.5;
    }

    .steps-list {
      list-style: none;
      padding: 0;
    }

    .step-item {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      cursor: pointer;
    }

    .step-circle {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #E3E3E3;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      margin-right: 15px;
      margin-top: 15px
    }

    .step-circle.active {
      background-color: #000;
      color: #FFF;
    }

    .step-title {
      font-weight: bold;
      color: #000;
    }

    .step-subtitle {
      font-size: 14px;
      color: #555;
    }

    .form-container {
      flex: 3;
      margin-left: 30px;
    }

    @media (max-width: 768px) {
      .steps-container {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        flex-wrap: wrap; /* Allow step items to wrap */
      }

      .steps-list {
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-wrap: wrap; /* Allow step items to wrap */
      }

      .step-item {
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
        margin-right: 10px; 
      }

      .step-circle {
        margin-right: 0;
        margin-bottom: 10px;
      }

      .form-container {
        margin-left: 0;
      }
    }
  `}
      </style>
    </div>
  );
}
