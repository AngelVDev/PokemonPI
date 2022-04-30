import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../Redux/actions";
import Loader from "./Loader";
import "./Styles/Details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const poke = useSelector((state) => state.pokeDetail);
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  if (poke) {
    return (
      <div id="CARD">
        <p>{poke.id ? poke.id : "000"}</p>
        <h2>{poke.name ? poke.name : "MISSINGNO"}</h2>
        <img
          src={
            poke.image
              ? poke.image
              : "https://www.nintenderos.com/wp-content/uploads/2021/11/C3CzizLXgAA90br.jpg"
          }
          alt="WILD MISSINGNO"
        />
        <div>
          <p alt="HP">Health points:{poke.HP ? poke.HP : "178"}</p>
          <p alt="ATK">Attack: {poke.attack ? poke.attack : "19"} </p>
          <p alt="DEF">Defense:{poke.defense ? poke.defense : "11"} </p>
          <p alt="SPD">Speed:{poke.speed ? poke.speed : "0"} </p>
          <p alt="Height">Height:{poke.height ? poke.height : "3.04"}</p>
          <p alt="Weight">Weight:{poke.weight ? poke.weight : "1590.8"}</p>
          <p>
            <span>
              {!poke.types ? "Not defined" : poke.types?.map((el) => el + " ")}
            </span>
          </p>
        </div>
        <button>
          <Link to="/home">RUN</Link>
        </button>
      </div>
    );
  } else {
    return (<Loader/>);
  }
};

export default Details;
