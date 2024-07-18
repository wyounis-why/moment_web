import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyAccountDeletion } from "./Redux/Features/UserSlice";
import { Link } from "react-router-dom"; // Import Link

function DeleteAccount() {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(verifyAccountDeletion(token));
  };
  const navigateHome = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div>
      <div className="flex" onClick={navigateHome}>
        <Link to="/" id="first" className="title">
          YOUR {""}{" "}
        </Link>
        <Link to="/" className="title">
          {" "}
          MOMENT
        </Link>
      </div>
      <h2 id="delete_title" >Confirm Account Deletion</h2>
      <p>Are you sure you want to delete your account?</p>
      <h2 id="text_color_delete">This action cannot be undone.</h2>
      <button onClick={handleDelete}></button>
    </div>
  );
}

export default DeleteAccount;
