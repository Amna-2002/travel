import React from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";

export default function Packages() {
  const navigate = useNavigate();

  return (
    <div
      className="packages"
      style={{
        background: `url(${process.env.PUBLIC_URL}/images/travel.jpg) center center / cover no-repeat`,
      }}
    >
      <div className="packages-content">
        <h1>PACKAGES</h1>
        <div className="packages-options">
          <button
            className="package-btn"
            onClick={() => navigate("/discover-pakistan")}
          >
            Discover Pakistan
          </button>
          <button
            className="package-btn"
            onClick={() => navigate("/international-tours")}
          >
            International Tours
          </button>
        </div>
      </div>
    </div>
  );
}
