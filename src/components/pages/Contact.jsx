import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Map + Form Section */}
      <div className="contact-container">
        {/* Google Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.174989128642!2d67.03321857467124!3d24.856689845516997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb8df69d5%3A0x9a5a21d5c9cd2a8!2sTravel%20App%20Events%20and%20Destination%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1694016043531!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

    
        <div className="contact-form-section">
          <h2>CONTACT US</h2>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> info@travel.com</p>
            <p><i className="fas fa-phone"></i> +92 312 678356</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

     
      <div className="contact-footer">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/923113177851" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
    
      </div>
    </div>
  );
}

export default Contact;
