import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Landing.css";

const Landing = () => {
  return (
    <div id="landingContainer">
      <div id="giantCard">
        <h1>¿Run into tall grass?</h1>
        <Link to="/home">
          <button id="landingBut">YES</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
