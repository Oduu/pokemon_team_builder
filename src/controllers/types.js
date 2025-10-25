import types from '../config/types.json' assert { type: 'json' };

export const getAllTypes = (req, res) => {
    res.json(types);
};

export const getTypeByName = (req, res) => {
    let language = String(req.query.language || 'english').toLowerCase();
        
    const result = types.find((t) => t[language].toLowerCase() === String(req.params.typeName).toLowerCase());

    if(!result) { 
		return res.status(400).json({ error: "No match, please check type name and language."});
	}

    res.json(result)
};