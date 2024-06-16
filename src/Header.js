import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom"; // Import Link

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header_container">
      <div className="header">
        <div className="col">
          <Link to="/" id="first" className="title-sm">
            YOUR {""}{" "}
          </Link>
          <Link to="/" className="title-sm">
            {" "}
            MOMENT
          </Link>
        </div>
        <div className="about-us">
          <Link
            to="https://yourmoment.medium.com/introducing-your-moment-rediscover-the-art-of-journaling-in-a-social-world-7670d975a595"
            className="about-us"
            target="_blank"
          >
            BLOG
          </Link>
        </div>
        <div className="about-us">
          <Link to="/about" className="about-us">
            ABOUT US
          </Link>{" "}
          {/* Use Link for navigation */}
        </div>
        <div className="about-us_extra">
          <Link to="/" id="first" className="title-sm">
            DOWNLOAD
          </Link>
          <Link
            to="https://apps.apple.com/us/app/your-moment/id6448125111"
            target="_blank"
            className="title-sm"
          >
            {" "}
            APP
          </Link>
        </div>
          <div className="about-us_extra-mobile">
            <Link to="/" id="first" className="title-sm">
              DOWNLOAD
            </Link>
            <Link
              to="https://apps.apple.com/us/app/your-moment/id6448125111"
              target="_blank"
              className="title-sm"
            >
              {" "}
              APP
            </Link>
          </div>
        <div className="mobile_menu">
          <div onClick={() => setOpen(!open)}>
            <div className={`burger ${open ? "open" : ""}`} />
            <div className={`burger ${open ? "open" : ""}`} />
            <div className={`burger ${open ? "open" : ""}`} />
          </div>
        </div>
      </div>
      <div className={`menu ${open ? "open" : ""}`}>
        <div className="about-us-menu">
          <Link
            to="https://yourmoment.medium.com/introducing-your-moment-rediscover-the-art-of-journaling-in-a-social-world-7670d975a595"
            className="about-us-menu"
            target="_blank"
          >
            BLOG
          </Link>
        </div>
        <div className="about-us-menu">
          <Link to="/about" className="about-us-menu">
            ABOUT US
          </Link>{" "}
          {/* Use Link for navigation */}
        </div>
      </div>
    </div>
  );
}
export default Header;
