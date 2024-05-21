import React, { useEffect } from "react";
import "./App.css";

function Terms() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'termly-jssdk';
    script.src = 'https://app.termly.io/embed-policy.min.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="custom-container">
      <div
        name="termly-embed"
        data-id="1a5cd75e-72d1-4f20-974c-59cdab62cc69"
      ></div>
    </div>
  );
}

export default Terms;
