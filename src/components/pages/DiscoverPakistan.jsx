import React from "react";
import "./Packages.css";

export default function DiscoverPakistan() {
  return (
    <div className="package-section">
      <h1 className="package-heading">DISCOVER PAKISTAN</h1>
      <p className="package-text">
        Our scope extends to a multitude of captivating destinations within Pakistan,
        from breathtaking northern mountains to the rich culture of Punjab and Sindh.
      </p>

      <div className="package-cards">
        <div className="package-card">
          <img src="/images/skardu.jpg" alt="Skardu Trip" />
          <h3>Skardu – 4 Days 3 Nights</h3>
          <button className="package-btn">Click Here</button>
        </div>
        <div className="package-card">
          <img src="/images/hunza.jpg" alt="Hunza Trip" />
          <h3>Hunza – 5 Days 4 Nights</h3>
          <button className="package-btn">Click Here</button>
        </div>
      </div>
    </div>
  );
}
