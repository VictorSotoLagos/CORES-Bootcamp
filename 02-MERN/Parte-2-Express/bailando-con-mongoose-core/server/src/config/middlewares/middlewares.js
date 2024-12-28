const validarUsuarios = (req, res, next) => {
    console.log(req.body);
    let error = [];    

    if (!req.body.título)
        error.push('Falta el nombre');

    if (!req.body.artista)
        error.push('Falta el artista');

    if (!req.body.añoDeLanzamiento)
        error.push('Falta el año de lanzamiento');
    
    if (!req.body.género)
        error.push('Falta el género');

    if (error.length > 0) return res.status(400).json({error});

    next();
}

export { validarUsuarios }