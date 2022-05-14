import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  filterByType,
  getPokemons,
  getTypes,
  orderByAtk,
  orderByName,
  showCreated,
} from "../Redux/actions";
import { useDispatch } from "react-redux";

const Filters = ({ currentPage, setCurrentPage }) => {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);
  const handleClear = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  //Sort by name
  const handleName = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByName(e.target.value));
  };

  //Sort by ATK
  const handleAtk = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByAtk(e.target.value));
  };

  //Filter by type
  const handleSelectType = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByType(e.target.value));
  };

  //Filter by origin
  const handleFilterSource = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(showCreated(e.target.value));
  };

  return (
    <>
      <button id="reset" onClick={(e) => handleClear(e)}>
        RESET
      </button>
      <label>
        Sort by name
        <select className="sor" onChange={(e) => handleName(e)}>
          <option value="">--</option>
          <option value="ASC">A to Z</option>
          <option value="DSC">Z to A</option>
        </select>
      </label>
      <label>
        Sort by ATK
        <select className="sor" onChange={(e) => handleAtk(e)}>
          <option value="">--</option>
          <option value="LOW">Low to hi</option>
          <option value="HI">Hi to low</option>
        </select>
      </label>
      <label>
        Filter by type
        <select className="filt" onChange={(e) => handleSelectType(e)}>
          <option value="ALL">All</option>
          {types?.map((type) => {
            return <option key={type.id}>{type.name}</option>;
          })}
        </select>
      </label>
      <label>
        Filter by source
        <select className="filt" onChange={(e) => handleFilterSource(e)}>
          <option value="MIXED">Mixed</option>
          <option value="API">API</option>
          <option value="DB">Createds</option>
        </select>
      </label>
    </>
  );
};
export default Filters;
