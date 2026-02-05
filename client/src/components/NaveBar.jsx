import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Signout from "./auth/Signout";
import { useAuth } from "../utils/AuthContext";

function NaveBar() {
  const { isAuth } = useAuth();
  if (isAuth === null) {
    return null;
  }

  return (
    <nav className="bg-gray-600 shadow p-4 flex justify-between">
      {!isAuth && (<h1 className="text-red-500 font-bold ">Job Tracker</h1>)}
      {isAuth && (
        <>
          <h1 className="text-red-500 font-bold ">
            <Link to="/">Job Tracker</Link>
          </h1>
          <Link
            className=" text-white  text-lg hover:text-blue-200"
            to="/add-job"
          >
            Add a new job
          </Link>
          <Signout />
        </>
      )}
    </nav>
  );
}

export default NaveBar;
