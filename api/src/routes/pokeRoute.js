const { Router } = require('express');
const { allInfo } = require('../controllers/pokeController.js');
const router = Router();

router.get('/pokemons', async (req, res) =>{
    try{
    const {name} = req.query;
    const info = await allInfo();
    if (name) {
        const pokeName = info.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      pokeName.length < 16
      ? res.status(200).json(pokeName)
      : res.status(404).send("POKEMON NOT FOUND");
    }else{
        res.status(200).json(info)
    }
    } catch (err){
        console.log(err)
    }
})
module.exports= router;