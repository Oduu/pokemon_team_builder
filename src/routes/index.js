import express from "express";
import { getAllPokemon, getPokemonByGeneration, getPokemonById } from "../controllers/pokemon.js";
import { getAllTypes, getTypeByName } from "../controllers/types.js";

const router = express.Router();

router.get("/pokemon", getAllPokemon);
router.get("/pokemon/id/:pokemonId", getPokemonById);
router.get("/pokemon/generation/:generationNumber", getPokemonByGeneration);

router.get("/types", getAllTypes);
router.get("/types/name/:typeName", getTypeByName);

export default router;
