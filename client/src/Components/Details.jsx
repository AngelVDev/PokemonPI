import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../Redux/actions";
import { missingno } from "./Cards";
import Loader from "./Loader";
// import { capitalize } from "./Cards";
import "./Styles/Details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const poke = useSelector((state) => state.pokeDetail);
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  if (poke) {
    return (
      <div id="CARD">
        {console.log(poke)}
        <p id="idP">ID: {poke.id ? poke.id : "000"}</p>
        <h2 id="pkH2name">{poke.name ? poke.name : "MISSINGNO"}</h2>
        <img
          id="pkPortrait"
          src={poke.image ? poke.image : missingno}
          alt="WILD MISSINGNO"
        />
        <div id="pokeStats">
          <p id="pkHP" alt="HP">
            Health points: {poke.HP ? poke.HP : "178"}
          </p>
          <p id="pkATK" alt="ATK">
            Attack: {poke.attack ? poke.attack : "19"}{" "}
          </p>
          <p id="pkDEF" alt="DEF">
            Defense: {poke.defense ? poke.defense : "11"}{" "}
          </p>
          <p id="pkSPD" alt="SPD">
            Speed: {poke.speed ? poke.speed : "0"}{" "}
          </p>
          <p id="pkH" alt="Height">
            Height: {poke.height ? poke.height : "3.04"}
          </p>
          <p id="pkW" alt="Weight">
            Weight: {poke.weight ? poke.weight : "1590.8"}
          </p>
          <p>
            <span id="typen">
              {poke.id >= 40
                ? poke.types.map((el) => el.name + " ").toUpperCase()
                : poke.types}
            </span>
          </p>
        </div>
        <button id="RUN" onClick={handleClick}>
          RUN
        </button>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Details;
