import React from "react";
import { auth } from "../auth/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      navigate("/")
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-60 md:ml-[32rem] md:mr-[36rem]">
        <button
      onClick={handleLogout}
      className="px-4 py-2 font-bold bg-red-500 text-white rounded-lg hover:bg-red-600"
    >
      CLICK HERE TO LOGOUT
    </button>
    </div>
  );
};

export default LogoutButton;
