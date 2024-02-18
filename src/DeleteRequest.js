import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAccountDeletion } from "./Redux/Features/UserSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "./Body.css";

function DeleteRequest() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const deletionStatus = useSelector((state) => state.auth.deletionStatus); // Adjust path based on your store
  const errorMessage = useSelector((state) => state.auth.error); // Adjust path based on your store
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click
  const navigateHome = () => {
    navigate("/"); // Navigate to the homepage
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestAccountDeletion({ email }));
  };

  return (
    <div>
      <div className="flex" onClick={navigateHome}>
        {" "}
        {/* Add onClick event */}
        <h1 id="first" className="title">
          YOUR {""}{" "}
        </h1>
        <h1 className="title"> MOMENT</h1>
      </div>
      <h2 id="delete_title">Delete Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit"></button>
      </form>
      {deletionStatus === "loading" && <p>Sending email...</p>}
      {deletionStatus === "succeeded" && (
        <p>Check your email to confirm account deletion.</p>
      )}
      {deletionStatus === "failed" && <p>Error: {errorMessage}</p>}
      <p id="text_color">
        We are sad to see your go, Thank you for taking your time and the
        moments you were were able to share with your loved ones
      </p>
      <h3 id="text_color">Have a great rest of Your Journey!</h3>
    </div>
  );
}

export default DeleteRequest;
