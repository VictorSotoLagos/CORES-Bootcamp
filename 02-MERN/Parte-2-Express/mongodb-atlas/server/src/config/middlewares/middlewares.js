const validarUsuarios = (req, res, next) => {
    console.log(req.body);
    let error = [];    

    if (!req.body.nombre)
        error.push('Falta el nombre');

    if (!req.body.edad)
        error.push('Falta la edad');

    if (!req.body.país)
        error.push('Falta el país');
    
    if (!req.body.email)
        error.push('Falta el email');

    if (error.length > 0) return res.status(400).json({error});

    next();
}

export { validarUsuarios }