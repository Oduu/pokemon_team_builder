import pokemon from '../config/pokemon.json' assert { type: 'json' };

export const getAllPokemon = (req, res) => {
    res.json(pokemon);
};

export const getPokemonById = (req, res) => {
	res.json(pokemon.find((p) => p.id === parseInt(req.params.pokemonId)));
};

export const getPokemonByGeneration = (req, res) => {

	const generationNumbers = {
		1: { start: 1, end: 151 },
		2: { start: 152, end: 251 },
		3: { start: 252, end: 386 },
		4: { start: 387, end: 493 },
		5: { start: 494, end: 649 },
		6: { start: 650, end: 721 },
		7: { start: 722, end: 809 },
		8: { start: 810, end: 898 },
	}

	if(!generationNumbers[req.params.generationNumber]) { 
		return res.status(400).json({ error: "Invalid generation number, data held for generations 1-8 only."});
	}

	const { start, end } = generationNumbers[req.params.generationNumber];
	res.json(pokemon.filter((p) => p.id >= start && p.id <= end));
};