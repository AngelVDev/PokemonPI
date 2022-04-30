import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Landing.css";

const Landing = () => {
  return (
    <div >
    <div>
      <h1>Welcome</h1>
      <Link to="/home">
        <button>Press START</button>
      </Link>
    </div>
    </div>
  );
};

export default Landing;