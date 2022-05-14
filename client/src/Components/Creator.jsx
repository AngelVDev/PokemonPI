import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPoke, getTypes } from "../Redux/actions";
import Loader from "./Loader";
import "./Styles/Creator.css";

function validateForms(input) {
  let error = {};
  if (!input.name) {
    error.name = "Name required";
  } else if (input.HP < 1 || input.HP > 999) {
    error.HP = "HP must be above 1 and below 1000";
  } else if (input.attack < 1 || input.attack > 999) {
    error.attack = "The value must be a number above 1 and below 1000";
  } else if (input.height < 1) {
    error.height = "The value must be a number above 1";
  } else if (input.weight < 1) {
    error.weight = "The value must be a number above 1";
  } else if (input.speed < 1 || input.speed > 999) {
    error.speed = "The value must be a number above 1 and below 1000";
  } else if (input.defense < 1 || input.defense > 999) {
    error.defense = "The value must be a number above 1 and below 1000";
  } else if (input.types.length === 0 || input.types.length > 2) {
    error.types = "Select less than two types and at least one type";
  } else {
    alert("Now you can create your poke-pal");
  }
  return error;
}
const Creator = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const navi = useNavigate();
  let [error, setError] = useState({});
  let [input, setInput] = useState({
    name: "",
    HP: "",
    attack: "",
    height: "",
    weight: "",
    defense: "",
    speed: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleClick() {
    navi(-1);
  }
  // function handleDeletePoke(e) {
  //   dispatch(deleteById(input));
  //   alert("You deleted a pokemon");
  //   navi("/home");
  // }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validateForms({ ...input, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    alert("WELL DONE");
    e.preventDefault(e);
    dispatch(createPoke(input));
    setInput({
      name: "",
      HP: "",
      attack: "",
      height: "",
      weight: "",
      defense: "",
      speed: "",
      types: [],
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      types: input.types.filter((typ) => typ !== el),
    });
  }

  if (types.length) {
    return (
      <div id="formContainer">
        <h1 id="cH1"> POKE-CREATION: </h1>
        <form id="dForm" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>
              Name:
              <input
                name="name"
                type="text"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
            </label>
            {error.name && <p>{error.name}</p>}
          </div>
          <div>
            <label>
              HP:
              <input
                type="number"
                value={input.HP}
                name="HP"
                onChange={(e) => handleChange(e)}
              />
              {error.HP && <p>{error.HP} </p>}
            </label>
          </div>
          <div>
            <label>
              Attack:
              <input
                type="number"
                value={input.attack}
                name="attack"
                onChange={(e) => handleChange(e)}
              />
              {error.attack && <p>{error.attack} </p>}
            </label>
          </div>
          <div>
            <label>
              Height:
              <input
                type="number"
                value={input.height}
                name="height"
                onChange={(e) => handleChange(e)}
              />
              {error.height && <p>{error.height} </p>}
            </label>
          </div>
          <label>
            Weight:
            <input
              type="number"
              value={input.weight}
              name="weight"
              onChange={(e) => handleChange(e)}
            />
            {error.weight && <p>{error.weight} </p>}
          </label>
          <div>
            <label>
              Speed:
              <input
                type="number"
                value={input.speed}
                name="speed"
                onChange={(e) => handleChange(e)}
              />
              {error.speed && <p>{error.speed} </p>}
            </label>
          </div>
          <div id="defDiv">
            <label>
              Defense:
              <input
                type="number"
                value={input.defense}
                name="defense"
                onChange={(e) => handleChange(e)}
              />
              {error.defense && <p>{error.defense} </p>}
            </label>
          </div>
          <label>
            Types:
            <select id="selTypes" onChange={(e) => handleSelect(e)}>
              <option id="nuli" value="">
                -
              </option>
              {types?.map((el) => (
                <option id={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
            {error.types && <p>{error.types} </p>}
          </label>
          <button
            id="butCreate"
            disabled={Object.keys(error).length}
            onClick={handleClick}
            type="submit"
          >
            CREATE
          </button>
        </form>
        <ul id="uList">
          {input.types?.map((el) => (
            <div id="divDel">
              <button id="Del" onClick={() => handleDelete(el)}>
                x
              </button>
              <p id={el.id}>{el}</p>
            </div>
          ))}
        </ul>
        <Link to="/home">
          <button id="RUN2">RUN</button>
        </Link>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Creator;
