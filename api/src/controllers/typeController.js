const axios = require ('axios');
const { Pokemon, Type } = require('../db');

const typeApi = async () => {
    const urlApi = axios('https://pokeapi.co/api/v2/type')
    const allInfo = urlApi.data.results.map(el => el.name)
    return allInfo
}
const toDB = async() =>{
    const api = await typeApi()
    if (!api.length){
    return db = await Type.bulkCreate(api)
    } else {
     return  Type.findAll({name:name})
    }
}
module.exports = {toDB}