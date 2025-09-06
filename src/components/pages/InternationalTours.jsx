import React from "react";
import "./Packages.css";

export default function InternationalTours() {
  return (
    <div className="package-section">
      <h1 className="package-heading">INTERNATIONAL TOURS</h1>
      <p className="package-text">
        Explore amazing destinations worldwide with our International Tour Packages.
      </p>

      <div className="package-cards">
        <div className="package-card">
          <img src="/images/dubai.jpg" alt="Dubai Trip" />
          <h3>Dubai – 5 Days</h3>
          <button className="package-btn">Click Here</button>
        </div>
        <div className="package-card">
          <img src="/images/turkey.jpg" alt="Turkey Trip" />
          <h3>Turkey – 7 Days</h3>
          <button className="package-btn">Click Here</button>
        </div>
      </div>
    </div>
  );
}
