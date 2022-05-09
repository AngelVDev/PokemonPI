const axios = require("axios");
const { Pokemon, Type } = require("../db");

const pokeApi = async () => {
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const apiResults = apiUrl.data.results;
  const pokeData = [];

  for (let i = 0; i < apiResults.length; i++) {
    const secGet = await axios.get(apiResults[i].url);
    const poke = secGet.data;
    pokeData.push({
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
    });
  }
  return pokeData;
  // try {
  //   const pokeData = [];
  //   for (let i = 1; i < 151; i++) {
  //     pokeData.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
  //   }
  //   Promise.all(pokeData).then((pk) => {
  //     let pokeArray = pk.map((poke) => {
  //       return {
  //         id: poke.data.id,
  //         name: poke.data.name,
  //         types: [
  //           poke.data.types[0].type.name,
  //           poke.data.types[1] ? poke.data.types[1].type.name : null,
  //         ].filter(Boolean),
  //         image: poke.data.sprites.other["official-artwork"].front_default,
  //         HP: poke.data.stats[0].base_stat,
  //         attack: poke.data.stats[1].base_stat,
  //         defense: poke.data.stats[2].base_stat,
  //         speed: poke.data.stats[5].base_stat,
  //         weight: poke.data.weight,
  //         height: poke.data.height,
  //       };
  //     });
  //     return pokeArray;
  //   });
  //   return Promise();
  // } catch (err) {
  //   console.log(err);
  // }
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
