import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // Import Link

function Footer() {
  return (
    <div className="footer">
      <h5 className="footer_title">© Copyright AWE LLC</h5>
      <h5 className="footer_title">help@aweioio.com</h5>
      <Link to="/delete-account" className="footer_title">Delete Account</Link> {/* Use Link for navigation */}
    </div>
  );
}

export default Footer;
