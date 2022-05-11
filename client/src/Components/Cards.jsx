import React from "react";
import "./Styles/Cards.css";
export let missingno =
  "https://static.wikia.nocookie.net/espokemon/images/4/41/Mimikyu.png";

const Cards = ({ id, image, name, types }) => {
  return (
    <div id="container">
      <div id="info">
        <h1>#{id > 40 ? "DB" : id}</h1>
        <h2>{name}</h2>
        <p>
          Types:{" "}
          {id <= 40
            ? types.map((el) => el + "; ")
            : types.map((el) => el.name + "; ")}
        </p>
      </div>
      <img src={image ? image : missingno} alt="cardimgerror" />
    </div>
  );
};
export default Cards;
