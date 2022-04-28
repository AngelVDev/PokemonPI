const axios = require("axios");
const { Pokemon, Type } = require("../db");

const pokeApi = async () => {
  let index = 1;
  let urls = [];
  while (index <= 151) {
    urls.push(`https://pokeapi.co/api/v2/pokemon/${index}`);
    index++;
  }
  // const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");

  Promise.all(urls).then(
    (poke) => (
    let pokeData = poke.map({
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
  })))
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
