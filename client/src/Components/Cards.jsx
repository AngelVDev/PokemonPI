import React from "react";
import "./Styles/Cards.css";

const Cards = ({image, name, types}) => {
  return (
      <div id="container">
        <div id="info">
        <h1>{name}</h1>
        <p>Types: {types?.map((el)=> el + ";  ")}</p>
        </div>
        <img src={image} alt="cardimgerror" />
      </div>
  );
};
export default Cards;