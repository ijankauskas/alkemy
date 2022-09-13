function authMiddleware(req, res, next){
    if(!req.session.userLogged){
        return res.json('no estas logeado')
    }
    next();
}

module.exports = authMiddleware;