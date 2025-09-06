import React from "react";
import "./Services.css";

const services = [
  {
    title: "Flight Booking",
    img: "/images/booking.jpg",
    desc: "Book domestic and international flights at the best prices."
  },
  {
    title: "Hotel Reservations",
    img: "/images/hotel.jpg",
    desc: "Find and book top-rated hotels worldwide with exclusive deals."
  },
  {
    title: "Tour Packages",
    img: "/images/img-6.jpg",
    desc: "Customized travel packages for individuals, couples, and groups."
  },
  {
    title: "Travel Insurance",
    img: "/images/insure.jpg",
    desc: "Secure your trip with comprehensive travel insurance plans."
  },
  {
    title: "Visa Assistance",
    img: "/images/vis.jpg",
    desc: "Get professional visa consultancy and application support."
  },
  {
    title: "Transport Services",
    img: "/images/tra.jpg",
    desc: "Airport pickups, car rentals, and local transport arrangements."
  },
  {
    title: "Food & Dining",
    img: "/images/food.jpg",
    desc: "Enjoy the best local and international cuisine during your travels."
  },
  {
    title: "Cruise Trips",
    img: "/images/cruise.jpg",
    desc: "Luxury cruise packages to explore oceans and exotic islands."
  },
  {
    title: "Travel Guidance",
    img: "/images/guid.jpg",
    desc: "Professional guidance to plan, budget, and enjoy your journey smoothly."
  }
];

function Services() {
  return (
    <div className="services">
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-img" />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
