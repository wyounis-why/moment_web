import React, { useEffect } from "react";
import "./App.css";

function Privacy() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "termly-jssdk";
    script.src = "https://app.termly.io/embed-policy.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="custom-container">
      <div
        name="termly-embed"
        data-id="78c9df00-255d-49e9-bcc3-a3f531dc0db9"
      ></div>
    </div>
  );
}

export default Privacy