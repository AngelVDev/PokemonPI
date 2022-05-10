import React from "react";
import "./Styles/Cards.css";

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Cards = ({ id, image, name, types }) => {
  return (
    <div id="container">
      <div id="info">
        <h1>#{id}</h1>
        <h2>{capitalize(name)}</h2>
        <p>Types: {types?.map((el) => el + ";  ")}</p>
      </div>
      <img src={image} alt="cardimgerror" />
    </div>
  );
};
export default Cards;
