import React from "react";
import "./Destination.css";

const destinations = [
  { name: "UNITED STATES", img: "/images/us.jpg", flag: "/images/us.png" },
  { name: "GERMANY", img: "/images/german.jpg", flag: "/images/germany.png" },
  { name: "SWITZERLAND", img: "/images/swit.jpg", flag: "/images/swt.png" },
  { name: "FRANCE", img: "/images/france.jpg", flag: "/images/france.png" },
  { name: "AZERBAIJAN", img: "/images/azer.jpg", flag: "/images/az.png" },
  { name: "BRAZIL", img: "/images/braz.jpg", flag: "/images/br.png" },
  { name: "CANADA", img: "/images/canada.jpg", flag: "/images/canada.png" },
  { name: "TURKEY", img: "/images/turk.jpg", flag: "/images/turkey.png" },
  { name: "UNITED ARAB EMIRATES", img: "/images/uae.jpg", flag: "/images/uae.png" },
  { name: "CHINA", img: "/images/china.jpg", flag: "/images/china.png" },
  { name: "ZIMBABWE", img: "/images/zimb.jpg", flag: "/images/zim.png" },
  { name: "MALAYSIA", img: "/images/malys.jpg", flag: "/images/malaysia.png" },

];

function Destinations() {
  return (
    <div className="destinations">
      <h1>DESTINATIONS</h1>
      <div className="destinations-grid">
        {destinations.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.img} alt={place.name} className="destination-img" />
            <div className="destination-overlay">
              <img src={place.flag} alt="flag" className="flag" />
              <p>{place.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
