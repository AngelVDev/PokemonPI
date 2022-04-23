const axios = require ('axios');
const { Pokemon, Type } = require ('../db')

const pokeApi = async () =>{
const pokeUrl = async () => {
for (let i = 1; i < 151; i++){
    axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
}}
const allApi = pokeUrl.data.map((poke) => ({
    id: poke.id,
    name: poke.forms.name,
    image: poke.sprites.official-artwork.front_default,
    HP: poke.stats[0].base_stat,
    strength: poke.stats[1].base_stat,
    speed: poke.stats[5].base_stat,
    height: poke.height,
    weight: poke.weight,
    types: poke.types.type.map(el => el.name)
}))
return allApi
}

const pokeDB = async () => {
    const service = await Pokemon.findAll({include: Type})
    return service
}

const allInfo = async () => {
    const api = await pokeApi();
    const db = await pokeDB();
    const all = api.concat(db);
    return all
}

module.exports= {allInfo}