import { useLocation } from "react-router-dom";

export default function Manage() {
  const location = useLocation();
  const fund = location.state?.fund;

  if (!fund) {
    return (
      <p style={{ color: "black" }}>
        No fund data available. Please select a fund first.
      </p>
    );
  }

  return (
    <div>
      <h1 style={{ color: "black" }}>Manage Fund</h1>
      <p style={{ color: "black" }}>Name: {fund.name}</p>
      <p style={{ color: "black" }}>Manager: {fund.manager}</p>
      <p style={{ color: "black" }}>AUM: {fund.AUM}</p>
      <p style={{ color: "black" }}>Status: {fund.status}</p>
      <p style={{ color: "black" }}>Investors: {fund.investors}</p>
      <p style={{ color: "black" }}>KYC: {fund.KYC}</p>
      <p style={{ color: "black" }}>Risk Level: {fund.risk}</p>
    </div>
  );
}
