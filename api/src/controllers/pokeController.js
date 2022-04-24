const axios = require("axios");
const { Pokemon, Type } = require("../db");

const pokeApi = async () => {
  const pokes = [];
  for (let i = 1; i === 151; i++) {
    return (pokes = i);
  }
  console.log(pokes);
  // const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokes}`);
  const results = apiUrl;

  // const pokeData = [];
  const pokeData = results.map((poke) => ({
    id: poke.id,
    name: poke.name,
    types: poke.types.map((t) => t.type.name),
    image: poke.sprites.other["official-artwork"].front_default,
    HP: poke.stats[0].base_stat,
    attack: poke.stats[1].base_stat,
    defense: poke.stats[2].base_stat,
    speed: poke.stats[5].base_stat,
    weight: poke.weight,
    height: poke.height,
  }));
  // for (let i = 0; i < results.length; i++) {
  //   const secGet = await axios.get(results[i].url);
  //   const poke = secGet.data;

  //   pokeData.push({
  // id: poke.id,
  // name: poke.name,
  // types: poke.types.map((t) => t.type.name),
  // image: poke.sprites.other["official-artwork"].front_default,
  // HP: poke.stats[0].base_stat,
  // attack: poke.stats[1].base_stat,
  // defense: poke.stats[2].base_stat,
  // speed: poke.stats[5].base_stat,
  // weight: poke.weight,
  // height: poke.height,
  //   });
  // }
  return pokeData;
};

const pokeDB = async () => {
  const service = await Pokemon.findAll({ include: Type });
  return service;
};

const allInfo = async () => {
  const api = await pokeApi();
  const db = await pokeDB();
  const all = [...api, ...db];
  return all;
};
module.exports = { allInfo };
