import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQPokes } from "../Redux/actions";
import "./Styles/Searchbar.css"

const Searchbar = () => {
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getQPokes(name));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search in pokedex"
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;