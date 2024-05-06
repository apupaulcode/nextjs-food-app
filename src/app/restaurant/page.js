"use client";

import React, { useState } from "react";
import ResturantLogin from "../_components/resturantLogin";
import ResturantSignUp from "../_components/resturantSignUp";
import ResturantHeader from "../_components/ResturantHeader";
import './style.css';
import ResturantFooter from "../_components/ResturantFooter";
const Resturant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
        <ResturantHeader/>
      <h1>Resturant Login/SignUp Page</h1>
      {login ? <ResturantLogin /> : <ResturantSignUp />}
      <div>
        <button 
         onClick={() => setLogin(!login)}
         className="button-link"
         >
          {login
            ? "Do not have account? SignUp"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
    <ResturantFooter/>
    </>
  );
};

export default Resturant;
