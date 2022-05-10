import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPoke, getTypes } from "../Redux/actions";
import Loader from "./Loader";

function validateForms(input) {
  let error = {};
  if (!input.name) {
    error.name = "Name required";
  }
  if (input.HP < 1 || input.HP > 999) {
    error.HP = "HP must be above 1 and below 1000";
  }
  if (input.attack < 1 || input.attack > 999) {
    error.attack = "The value must be a number above 1 and below 1000";
  }
  if (input.height < 1) {
    error.height = "The value must be a number above 1";
  }
  if (input.weight < 1) {
    error.weight = "The value must be a number above 1";
  }
  if (input.defense < 1 || input.defense > 999) {
    error.defense = "The value must be a number above 1 and below 1000";
  }
  if (input.speed < 1 || input.speed > 999) {
    error.speed = "The value must be a number above 1 and below 1000";
  }
  if (!input.types || input.types.length > 2) {
    error.types = "Select less than two types and at least one type";
  }
  return error;
}
const Creator = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  // eslint-disable-next-line no-unused-vars
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

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validateForms({ ...input, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    !error ? alert("WELL DONE") : alert("OOPS");
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
      <div>
        <h1> POKE-CREATION:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>
              Name:
              <input
                name="name"
                type="text"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
              {error.name && <p>{error.name}</p>}
            </label>
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
          <div>
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
            <select onChange={(e) => handleSelect(e)}>
              <option value="">Types</option>
              {types?.map((el) => (
                <option value={el.name}>{el.name}</option>
              ))}
            </select>
            <ul>
              {input.types?.map((el) => (
                <div>
                  <button onClick={() => handleDelete(el)}>x</button>
                  <p>{el}</p>
                </div>
              ))}
            </ul>
            {error.types && <p>{error.types} </p>}
          </label>
          <button type="submit">CREATE</button>
        </form>
        <Link to="/home">
          <button>RUN</button>
        </Link>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Creator;
