const { Router } = require("express");
const { allInfo } = require("../controllers/pokeController.js");
const router = Router();

router.get("/pokemons", async (req, res) => {
  try {
    const { name } = req.query;
    const info = await allInfo();
    console.log(name);
    if (name) {
      const pokeName = info.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      pokeName
        ? res.status(200).json(pokeName)
        : res.status(404).json("NOT FOUND");
    } else {
      res.status(200).json(info);
    }
  } catch (err) {
    res.send(err);
  }
});
router.get("/pokemons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const info = await allInfo();
    if (id > 20) {
      const pokeInDB = await Pokemon.findOne({ where: { id }, include: Type });
      !pokeInDB
        ? res.status(404).send("Not valid ID")
        : res.status(200).json(pokeInDB);
    } else {
      const pokeId = info.find((element) => `${element.id}` === id);
      pokeId ? res.status(200).json(pokeId) : res.status(404).send("Not found");
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
